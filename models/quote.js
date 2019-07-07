const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema
const QuoteSchema = new Schema ({
    quote: String,
    character: String,
    link: String,
    id: Number,
});

module.exports = ohBrother = mongoose.model('ohBrother', QuoteSchema)