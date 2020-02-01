const dotenv = require('dotenv');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

dotenv.config();

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  process.env.MONGODB_URL_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);