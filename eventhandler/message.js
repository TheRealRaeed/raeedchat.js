import { RCEmbed } from "../APIHandler/embed";
import { RCMessageSend } from "../APIHandler/sendmessage";

export class MessageCreate {
  constructor(socket, callback, token) {
    this.ws = socket;
    this.ws.on("message", (message) => {
      const { e, d } = JSON.parse(message);
      if (e === "MESSAGE_CREATE") {
        d.send = function (content) {
          new RCMessageSend(content, token);
        };
        d.embed = function (title, description, image) {
          new RCEmbed(title, description, image, token);
        };
        callback(d);
      }
    });
  }
}
