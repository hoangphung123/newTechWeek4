// index.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const routes = require('./routes');

// Sử dụng middleware để xử lý JSON và các yêu cầu POST
app.use(bodyParser.json());

// Log function
function log(req) {
  console.log(`[${req.method}] ${req.url}`);
}

// Sử dụng các routes được định nghĩa
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
