const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema ({
    type: Object,
    drinks: [drinkSchema],
    date: {
        type: Date,
        default: () => {
            return new Date()(+new Date())
        }
    }
});

module.exports = mongoose.model("Log", logSchema);