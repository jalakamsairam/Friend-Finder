//dependencies


var bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var express = require("express");
var app = express();
//Sets an initial port . we will use this port later in our listener

var PORT = process.env.PORT || 8080;
//sets the port to something that the heroku will assign or to 8080 if its accessable

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

var apiRoutes = require("./routing/apiRoutes.js")(app);

var htmlRoutes = require("./routing/htmlRoutes.js")(app);

app.listen(PORT,function(){
    console.log("App is listening on port"+PORT);
})