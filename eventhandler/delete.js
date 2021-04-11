export class MessageDelete {
  constructor(socket, callback) {
    this.ws = socket;
    this.ws.on("message", (message) => {
      const { e, d } = JSON.parse(message);
      if (e === "MESSAGE_DELETE") {
        callback(d);
      }
    });
  }
}
