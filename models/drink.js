const mongoose = require('mongoose');
const ingr = require('../models/ingredient');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema ({
    type: Object,
    hardLiquor: {
        type: Array,
        default: ["None"]
    },
    nonAlc: {
        type: Array,
        default: ["None"]
    },
    bitters: {
        type: Array,
        default: ["None"]
    },
    garnish: {
        type: Array,
        default: ["None"]
    },
    other: {
        type: Array,
        default: ["None"]
    }
});

const placeSchema = new Schema ({
    type: Object,
    name: {
        type: String,
        default: "N/A"
    },
    location: {
        type: String,
        default: "N/A"
    }
})

const drinkSchema = new Schema ({
    type: Object,
    ingredients: ingredientSchema,
    preparation: {
        type: String,
        default: "N/A"
    },
    place: placeSchema
})

module.exports = mongoose.model("Drink", drinkSchema);