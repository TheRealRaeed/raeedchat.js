const WebSocket = require("ws");

export class Socket {
  constructor() {
    return new WebSocket("ws://api.raeedchat.com/websocket/");
  }
}
