const fs = require('fs');
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

const port = process.env.PORT || 3000;

app.use(serveStatic(path.join(__dirname, 'build')));

app.listen(port, () => {
  console.log(`The application is now running on port ${port}.`);
});
