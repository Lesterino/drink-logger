const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let hlEnum = ["Whiskey", "Tequila", "Vodka", "Gin", "Brandy", "Rum"];
let gEnum = ["Olive", "Orange Peel", "Mint", "Lime"];
let naEnum = [];
let bEnum = [];
let oEnum = [];

const ingredientSchema = new Schema ({
    hardLiquor: {
        type: Array,
        enum: hlEnum,
        default: ["None"]
    },
    nonAlc: {
        type: Array,
        enum: naEnum,
        default: ["None"]
    },
    bitters: {
        type: Array,
        enum: bEnum,
        default: ["None"]
    },
    garnish: {
        type: Array,
        enum: gEnum,
        default: ["None"]
    },
    other: {
        type: Array,
        enum: oEnum,
        default: ["None"]
    }
});

const placeSchema = new Schema ({
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
    ingredients: [ingredientSchema],
    preparation: {
        type: String,
        default: "N/A"
    },
    place: placeSchema
})

module.exports = mongoose.model("Ingredient", ingredientSchema);