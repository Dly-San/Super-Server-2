/******************************/
/*     01.    REQUIRES        */
/******************************/

const Express = require('express');
const Router = Express.Router();

/******************************/
/*     02.   Middleware       */
/******************************/

Router.get("/", function(req, res) {
    res.sendFile(__dirname +"/index.html")
})

/******************************/
/*     03.   Finishing        */
/******************************/

module.exports = Router;
