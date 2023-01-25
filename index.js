const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

require('dotenv').config()

app.use(express.json())

// connect to Mongo
mongoose.connect(process.env.MONGO_URI, {dbName: "collections", useNewUrlParser: true});


app.use("/api", routes)

app.listen(5000, () => {
  console.log('server is listening on http://localhost:5000');
})


