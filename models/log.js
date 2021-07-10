const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema ({
    name: {
        type: String,
    },
    ingredients: {
        type: Object,
        ref: "Ingredient"
    },
    preparation: {
        type: String,
        default: "N/A"
    },
    type: {
        type: String,
        enum: ["Cocktail", "Beer", "Wine"]
    },
    place: {
        type: Object,
        ref: "Place"
    }
});

const logSchema = new Schema ({
    drinks: [drinkSchema],
    date: {
        type: Date,
        default: () => {
            return new Date()(+new Date())
        }
    }
});

module.exports = mongoose.model("Log", logSchema);