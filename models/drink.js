const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let hlEnum = ["Whiskey", "Tequila", "Vodka", "Gin", "Brandy", "Rum"];
let gEnum = ["Olive", "Orange Peel", "Mint", "Lime"];
let naEnum = ['h'];
let bEnum = ['h'];
let oEnum = ['h'];

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