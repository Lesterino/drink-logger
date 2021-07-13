const Log = require('../models/log')
const Drink = require('../models/drink')

const index = async(req, res) => {
    try {
        const logs = await Log.find({});
        res.render('logs/index', {
            logs
        });
    } catch(err) {
        res.status(404);
    }
}

const newLog = async(req, res) => {
    try {
        const drinkList = await Drink.find({});
        res.render('logs/new', {
            drinkList
        });
    } catch(err) {
        res.status(404);
    }
}

const show = async(req, res) => {
    try {
        const log = await Log.findById(req.params.id);
        res.status(200).json(log);
    } catch (err) {
        res.status(404);
    }
}

const create = async(req, res) => {
    try {
        const today = new Date();
        req.body.date = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`
        const newLog = await Log.create(req.body);
        res.redirect('logs');
    } catch (err) {
        res.status(404).json(err);
    }
}

const deleteOne = async(req, res) => {
    try {
        const deletedLog = await Log.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedLog);
    } catch(err) {
        res.status(404).json(err);
    }
}

module.exports = {
    index,
    new: newLog,
    create,
    show,
    delete: deleteOne
}