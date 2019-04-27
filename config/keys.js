//keys.js - figures out what set of credentials to return
if(process.env.NODE_ENV == "production") {
    //we are hosting return prod keys 
    module.exports = require("./prod");
} else {
    //we are in dev, return dev keys
    module.exports = require("./dev");
}