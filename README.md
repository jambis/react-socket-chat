# React Socket Chat

Simple chat app using react and socket.io.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

* Clone or download the project
* Install dependencies
```
npm install
```

* You will want to first change the following line in src/socket.js:
```
const socket = io.connect()
```
to 
```
const socket = io.connect(http://localhost:3001)
```

* Also within server.js comment out the following line:
```
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "build", "index.html"));
});
```

* You can start the server by running in your terminal the following line:
```
node server.js
```

* Finally you can run the app by typing in your terminal
```
npm start
```

## Demo

You can view a live demo over at https://react-chat-jb.herokuapp.com/

## Built With

* create-react-app
* express
* socket.io

## Future Work

* Unit testing
* Select name colors
* Add Emoticons

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
