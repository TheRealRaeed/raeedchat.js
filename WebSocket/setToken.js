export class TokenSetter {
  constructor(ws) {
    this.ws = ws;
  }

  setToken(token, callback) {
    if (typeof token !== "string") {
      console.error("Token is not a string");
    } else {
      this.token = token;
      this.ws.on("open", () => {
        this.ws.send(
          JSON.stringify({
            e: "INIT",
            d: {
              token: token
            }
          })
        );
      });
      this.ws.on("message", (msg) => {
        const { e, d } = JSON.parse(msg);
        const colors = require("colors");
        if (e === "INIT_FAIL") {
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
}
