/******************************/
/*     01.    REQUIRES        */
/******************************/

const Express = require("express");
const Color = require("colors");
const Server = Express();

/******************************/

const Home = require("./Source/Routers/Home/Home.js");
const Login = require("./Source/Routers/Login/Login.js");
const wError = require("./Source/Routers/wError/wError.js");

/******************************/
/*     02.   Main Module      */
/******************************/

Server.use(Express.static("Source/Public"));

Server.get("/", Home);

/******************************/
/*     03.   Middleware       */
/******************************/

Server.get("/login", Login);

/******************************/
/*     04. Extra Module       */
/******************************/

Server.get('*', wError);

/******************************/
/*     05.   Finishing        */
/******************************/

const listener = Server.listen(process.env.PORT, () => {
  console.log(Color.cyan("[🔎] • Your port: "+ listener.address().port));
});