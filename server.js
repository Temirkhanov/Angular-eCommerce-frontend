const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/dist/angular-ecommerce"));

app.listen(process.env.PORT || 8080);

// PathLocationStrategy <- Angular app uses for routing
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/angular-ecommerce/index.html"));
});

console.log("Test !!!");
