const express = require('express');
const path = require('path');

const port = 8080;

express.static(path.resolve(__dirname, '../dist'));

const app = express()

app.listen(port, () => {
  console.log(`Listening on : htttp://localhost:${port}`)
})

