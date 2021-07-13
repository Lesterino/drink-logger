const Ingredient = require('../models/ingredient')

const index = async(req, res) => {
    try {
        const allIng = await Ingredient.find({});
        res.render('ingredients/index', {
            allIng
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
        const newIng = await Ingredient.create(req.body);
        console.log(newIng);
        res.redirect('ingredients/')
    } catch (err) {
        res.status(404).json(err);
    }
}

const show = async(req, res) => {
    const ing = await Ingredient.findById(req.params.id);
    res.render('ingredients/show', {
        ing
    })
}

const deleteOne = async(req, res) => {
    try {
        const deletedIng = await Ingredient.findByIdAndDelete(req.body);
        res.status(201).json(deletedIng);
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