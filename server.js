
const express = require('express');


// Create app
var app = express();

app.use(express.static('public'));
app.listen(3000, functio n() {
  console.log("Express server is up on port 3000");
});
