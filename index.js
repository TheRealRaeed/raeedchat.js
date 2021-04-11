import { Socket } from "./WebSocket/createWebsocket";
import { TokenSetter } from "./WebSocket/setToken";
import { MessageDelete } from "./eventhandler/delete";
import { MessageCreate } from "./eventhandler/message";

class Client {
  constructor() {
    globalThis.socket = new Socket();
  }
  static setToken(token, callback) {
    this.tokenSetter = new TokenSetter(globalThis.socket);
    this.tokenSetter.setToken(token, callback);
    globalThis.token = token;
  }
  static on(event, callback) {
    const colors = require("colors");
    if (event === "message") {
      new MessageCreate(globalThis.socket, callback, globalThis.token);
    }
    if (event === "messageDelete") {
      new MessageDelete(globalThis.socket, callback);
    }
  }
}

module.exports = Client;
