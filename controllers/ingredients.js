const Ingredient = require('../models/ingredient')

const index = (req, res) => {
    Ingredient.find({}, (err, Ingredients) => {
        res.render('ingredients/index', {
            Ingredients
        });
    });
}

module.exports = {
    index,
    new: newIngredient,
    create,
    show
}