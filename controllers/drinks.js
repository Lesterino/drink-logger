const Drink = require('../models/drink')

const index = (req, res) => {
    Drink.find({}, (err, logs) => {
        res.render('drinks/index', {
            drinks
        });
    });
}

module.exports = {
    index,
    // new: newDrink,
    // create,
    // show
}