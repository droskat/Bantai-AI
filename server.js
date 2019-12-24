const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const items = require('./routes/api/items');


const app = express();

// bodyparser Middleware
app.use(bodyParser.json());

// DB Config

//connect to MONGO
mongoose
    .connect(db)
    .then(()=> console.log("mongoDB connected..."))
    .catch(err => console.log(err));

//define routes
app.use('/api/items',items);
    const port = process.env.PORT || 5000;

app.listen(port,()=> console.log("server Started at"+port));