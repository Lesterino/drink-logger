const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema ({
    hardLiquor: {
        type: Array,
        enum: ["Whiskey", "Tequila", "Vodka", "Gin", "Brandy", "Rum"],
        default: ["None"]
    },
    nonAlc: {
        type: Array,
        enum: [],
        default: ["None"]
    },
    bitters: {
        type: Array,
        enum: [],
        default: ["None"]
    },
    garnish: {
        type: Array,
        enum: ["Olive", "Orange Peel", "Mint", "Lime"],
        default: ["None"]
    },
    other: {
        type: Array,
        default: ["None"]
    }
})

module.exports = mongoose.model("Ingredient", ingredientSchema);