const Ingredient = require('../models/ingredient')

const index = async(req, res) => {
    try {
        const ingredients = await Ingredient.find({});
        res.status(200).json(ingredients);
    } catch(err) {
        res.status(404);
    }
}

// const create = async(req, res) => {
//     const rq = req.body;
    
// }

module.exports = {
    index,
    new: newIngredient,
    create,
    show
}