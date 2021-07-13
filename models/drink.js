const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema ({
    name: {
        type: String,
        default: "N/A"
    },

    ingredients: {
        type: Array,
        ref: "Ingredient"
    },

    preparation: {
        type: String,
        default: "N/A"
    },

    place: {
        type: String,
        ref: "Place"
    }
});

module.exports = mongoose.model("Drink", drinkSchema);