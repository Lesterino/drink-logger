const Log = require('../models/log')

const index = (req, res) => {
    Log.find({}, (err, logs) => {
        res.render('drinks/index', {
            logs
        });
    });
}

module.exports = {
    index,
    new: newDrink,
    create,
    show
}