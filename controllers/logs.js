const Log = require('../models/log')

const index = (req, res) => {
    Log.find({}, (err, logs) => {
        res.render('logs/index', {
            logs
        });
    });
}

module.exports = {
    index,
    // new: newLog,
    // create,
    // show
}