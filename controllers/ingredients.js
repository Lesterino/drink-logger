const Ingredient = require('../models/ingredient')

const index = async(req, res) => {
    try {
        const allIngr = await Ingredient.ingredients;
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

const show = async(req, res) => {
    try {
        const ingr = await Ingredient.findById(req.params.id);
        res.status(200).json(ingr);
    } catch (err) {
        res.status(404).json(err);
    }
}

const create = async(req, res) => {
    try {
        const newIngr = await Ingredient.create(req.body);
        res.status(201).json(newIngr);
    } catch (err) {
        res.status(404).json(err);
    }
}

const deleteOne = async(req, res) => {
    try {
        const deletedIngr = await Ingredient.create(req.body);
        res.status(201).json(deletedIngr);
    } catch(err) {
        res.status(404).json(err);
    }
}

module.exports = {
    index,
    new: newIngredients,
    create,
    show,
    delete: deleteOne
}