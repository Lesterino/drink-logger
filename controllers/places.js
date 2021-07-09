const Place = require('../models/place')

const index = (req, res) => {
    Place.find({}, (err, Places) => {
        res.render('places/index', {
            Places
        });
    });
}

module.exports = {
    index,
    new: newPlace,
    create,
    show
}