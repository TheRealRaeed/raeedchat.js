const WebSocket = require("ws");
const fetch = require("node-fetch");
const gateway = "https://api.raeedchat.com/api/v1";

class Client {
  constructor() {
    globalThis.ws = new WebSocket("wss://api.raeedchat.com");
    console.log(this.ws);
  }
  static setToken(token, callback) {
    const ws = globalThis.ws;

    if (typeof token !== "string") {
      console.error("Token is not a string");
    } else {
      globalThis.token = token;
      ws.on("open", () => {
        ws.send(
          JSON.stringify({
            e: "INIT",
            d: {
              token: token
            }
          })
        );
      });
      ws.on("message", (msg) => {
        const { e, d } = JSON.parse(msg);
        const colors = require("colors");
        if ((e = "INIT_FAIL")) {
          console.log(
            colors.red(
              "RaeedChat initialization failed this is most likely due to a wrong token! "
            )
          );
        }
      });
      if (callback) {
        callback();
      }
    }
  }
  static on(event, callback) {
    const colors = require("colors");
    console.log(this.ws);
    globalThis.ws.on("message", (message) => {
      if (event === "message") {
        const { e, d } = JSON.parse(message);
        if (e === "MESSAGE_CREATE") {
          d.send = function (content) {
            fetch(`${gateway}/sendMessage`, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${globalThis.token}` //authorization
              },
              body: JSON.stringify({
                message: content
              })
            })
              .then((res) => res.json())
              .then((res) => {
                if (!res.success) {
                  console.log(res.errormessage);
                }
              });
          };
          d.embed = function (title, description, image) {
            if (!title) {
              console.warn(
                colors.black(colors.bgYellow("WARNING!")) +
                  " Title is recommended on embeds!"
              );
            }
            if (!description) {
              console.warn(
                colors.black(colors.bgYellow("WARNING!")) +
                  " Description is recommended on embeds!"
              );
            }
            fetch(`${gateway}/sendReply`, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${globalThis.token}` //authorization
              },
              body: JSON.stringify({
                title: title,
                description: description,
                image: image
              })
            })
              .then((res) => res.json())
              .then((res) => {
                if (!res.success) {
                  console.log(res.errormessage);
                }
              });
          };
          callback(d);
        }
      }
    });
    if (event === "messageDelete") {
      const { e, d } = JSON.parse(message);
      if (e === "MESSAGE_DELETE") {
        callback(d);
      }
    }
    if (event === "botEmbed") {
    }
  }
}

module.exports = Client;
