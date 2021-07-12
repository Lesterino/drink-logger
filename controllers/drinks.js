const Drink = require('../models/drink')

const index = async(req, res) => {
    try {
        const drinks = await Drink.find({});
        res.status(200).json(drinks);
    } catch(err) {
        res.status(404);
    }
}

const show = async(req, res) => {
    try {
        const drink = await Drink.findById(req.params.id);
        res.status(200).json(drink);
    } catch (err) {
        res.status(404).json(err);
    }
}

const deleteOne = async(req,res) => {
    try {
        const deletedDrink = await Drink.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedDrink);
    } catch(err) {
        res.status(404).json(err);
    }
}

module.exports = {
    index,
    // new: newDrink,
    // create,
    show,
    delete: deleteOne
}