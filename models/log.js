const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkLog = new Schema ({
    drinks: {
        type: Array,
        default: ["n/a"]
    },
    date: {
        type: Date,
        default: () => {
            return new Date()(+new Date())
        }
    }
});