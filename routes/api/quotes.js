const express = require('express');
const router = express.Router();

//item model
const Quote = require('../../models/Quote');

//ROUTES
router.get('/', (req, res) => {
    Quote.find()
    .sort({ date: -1 })
    .then(quotes => res.json(quotes))
})

//@Route Post app/items
router.post('/', (req, res) => {
    const newQuotes = new Quote({
        quote: req.body.quote,
        character: req.body.character,
        link: req.body.link,
        id: req.body.id
    });

    newQuotes.save().then(quote => res.json(quote));
})


module.exports = router;
