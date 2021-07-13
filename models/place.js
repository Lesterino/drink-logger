const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("Place", placeSchema);