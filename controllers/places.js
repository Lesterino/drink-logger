const Place = require('../models/drink')

const index = (req, res) => {
    Place.find({}, (err, Places) => {
        res.render('places/index', {
            Places
        });
    });
}

module.exports = {
    index,
    // new: newPlace,
    // create,
    // show
}