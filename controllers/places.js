const Place = require('../models/drink')

const index = async(req, res) => {
    try {
        const places = await Drink.find({});
        res.status(200).json(places);
    } catch(err) {
        res.status(404);
    }
}

const show = async(req, res) => {
    try {
        const place = await Place.findById(req.params.id);
        res.status(200).json(place);
    } catch (err) {
        res.status(404).json(err);
    }
}

const create = (req, res) => {
    try {
        const newPlace = await Place.create(req.body);
        res.status(201).json(newPlace);
    } catch(err) {
        res.status(404).json(err);
    }
}

const deleteOne = (req, res) => {
    try {
        const deletedPlace = await Place.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedPlace);
    } catch(err) {
        res.status(404).json(err);
    }
}

module.exports = {
    index,
    // new: newPlace,
    create,
    show,
    delete: deleteOne
}