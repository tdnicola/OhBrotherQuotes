const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const quotes = require('./routes/api/quotes');
const app = express();

//bodyparser middleware
app.use(bodyParser.json());

app.use(cors());
//db config
const db = require('./config/keys').mongoURI

//connect to db
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected..'))
    .catch(err => console.log(err));

app.use('/api/quotes', quotes);

const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", () => console.log(`Server started on port ${port}`))
