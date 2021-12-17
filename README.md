# RaeedChat API

-----------
NOTICE: RaeedChat v1 API is no longer available, this library will be updated soon after a new version of the API is available
---------

RaeedChat API lets you connect to RaeedChat systems and grow your bot! This is a library managed by the official RaeedChat team to use our api!

**THIS IS NOT FOR DISCORD BOTS ITS FOR RAEEDCHAT BOTS**

Tokens must be requested by emailing me at webdevraeed@gmail.com

## Usage

Here is a example of a way to use this package

```js
const Client = require("raeedchat.js"); //require the package

const client = new Client();

Client.setToken("TOKEN"); //Place your token here to use for verification THIS MUST BE DECLARED BEFORE ANY API ACTIONS SUCH AS SENDING MESSAGES, SENDING EMBEDS etc...

Client.on(
  "message",
  (
    message
  ) /* The parameter returned to the callback this contains the event message */ => {
    console.log(message.name); //the message.name property lets you get the name of the user
    if (message.message === "!help") {
      message.send("Hey!"); // Will send the message "hey", this is a additional property added by this package MAKE SURE THE TOKEN IS SET BEFORE THIS!
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
```

### Functions

`Client.setToken(token)` - Registers your token and uses it for authorization
`Client.on(event, callback)` Listens to a event with a callback

### Events

messageCreate - When a message is created this event is fired properties listed below

- `message.send(content)` = Sends a message
- `message.embed(title`, description, image) = Sends a embed
- `message.message` = The actual message
- `message.name` = The sender of the message
- `message.messageid` = The id of the message
- `message.id` = The id of the sender

messageDelete - When a message is deleted
message = id of the message

## Contribute

This project is looking to get better! If you have a suggestion or something you want to add, please go to our github!
