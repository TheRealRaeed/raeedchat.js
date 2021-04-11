const fetch = require("node-fetch");
const colors = require("colors");
const gateway = "http://api.raeedchat.com/api/v1";
export class RCEmbed {
  constructor(title, description, image, token) {
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
        authorization: `Bearer ${token}` //authorization
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
          console.log("RaeedChat error! " + colors.red(res.errormessage));
        }
      });
  }
}
