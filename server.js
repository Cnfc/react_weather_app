
const express = require('express');


// Create app
var app = express();
const PORT = proccess.env.PORT || 3000;


app.use(function (req, res, next) {
  if(req.headers['x-forwarded-photo'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});
app.use(exprewss.static('public'));



app.listen(PORT, function() {
  console.log("Express server is up on port " + Port);
});
