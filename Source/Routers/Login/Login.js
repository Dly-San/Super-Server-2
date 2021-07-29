/******************************/
/*     01.    REQUIRES        */
/******************************/

const Express = require('express');
const Router = Express.Router();

/******************************/
/*     02.   Middleware       */
/******************************/

Router.get("/login", function(req, res) {
    res.redirect("/")
})

/******************************/
/*     03.   Finishing        */
/******************************/

module.exports = Router;
