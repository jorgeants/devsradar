const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

mongoose.connect(
  process.env.MONGODB_URL_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);