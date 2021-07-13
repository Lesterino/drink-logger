const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema ({
    ingType: {
        type: String,
        enum: ["Hard Liquor", "Non-alcoholic", "Bitters", "Garnish", "Other"],
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model("Ingredient", ingredientSchema);