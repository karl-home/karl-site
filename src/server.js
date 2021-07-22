const path = require('path');
const express = require('express');
const app = express();
const port = 5000;
const hostname = '127.0.0.1';

app.get('/download', function(req, res){
  const file = `${__dirname}/assets/test1.txt`;
  console.log(file);
  res.download(file); // Set disposition and send it.
});

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));