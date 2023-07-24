const express = require('express');

const app = express();

app.get("/hello", (require, response) => {
  response.send('Hello Jonathan')
});

app.listen(3333);