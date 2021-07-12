const Ingredient = require('../models/ingredient')

const index = async(req, res) => {
    try {
        const allIngr = await Ingredient.find({});
        res.render('ingredients/index', {
            allIngr
        });
    } catch(err) {
        res.status(404);
    }
}

const newIngredients = async(req, res) => {
    try {
        res.render('ingredients/new');
    } catch(err) {
        res.status(404);
    }
}

const create = async(req, res) => {
    try {
        const newIngr = await Ingredient.create(req.body);
        console.log(newIngr);
        res.redirect('ingredients/')
    } catch (err) {
        res.status(404).json(err);
    }
}

const deleteOne = async(req, res) => {
    try {
        const deletedIngr = await Ingredient.findByIdAndDelete(req.body);
        res.status(201).json(deletedIngr);
    } catch(err) {
        res.status(404).json(err);
    }
}

module.exports = {
    index,
    new: newIngredients,
    create,
    delete: deleteOne
}