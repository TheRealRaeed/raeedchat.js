const fetch = require("node-fetch");
const gateway = "http://api.raeedchat.com/api/v1";

export class RCMessageSend {
  constructor(content, token) {
    fetch(`${gateway}/sendMessage`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}` //authorization
      },
      body: JSON.stringify({
        message: content
      })
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          console.error("RaeedChat error! " + colors.red(res.errormessage));
        }
      });
  }
}
