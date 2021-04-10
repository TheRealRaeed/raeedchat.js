# RaeedChat API

RaeedChat API lets you connect to RaeedChat systems and grow your bot! This is a library managed by the official RaeedChat team to use our api!

## Usage

Here is a example of a way to use this package

```js
const Client = require("raeedchat.js"); //require the package

const client = new Client();

Client.on(
  "message",
  (
    message
  ) /* The parameter returned to the callback this contains the event message */ => {
    console.log(message.name); //the message.name property lets you get the name of the user
    if (message.message === "!help") {
      message.send("Hey!"); // Will send the message "hey", this is a additional property added by this package
    }
    if (message.message === "!embed") {
      message.embed(
        "Title",
        "Description",
        "https://images.dog.ceo/breeds/retriever-golden/n02099601_281.jpg"
      ); //The embed property takes in all optional parameters in this order Title, Description, Image.

      /* 
            Not providing a description and/or title will cause a warning to pop up in your console as these are recommended
        */
    }
  }
);

Client.setToken("TOKEN"); //Place your token here to use for verification
```

### Functions

`Client.setToken(token)` - Registers your token and uses it for authorization
`Client.on(event, callback)` Listens to a event with a callback

### Events

messageCreate - When a message is created this event is fired properties listed below

- message.send(content) = Sends a message
- message.embed(title, description, image) = Sends a embed
- message.message = The actual message
- message.name = The sender of the message
- message.messageid = The id of the message
- message.id = The id of the sender

messageDelete - When a message is deleted
message = id of the message
