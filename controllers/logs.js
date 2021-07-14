const Log = require("../models/log");
const Drink = require("../models/drink");

const index = async (req, res) => {
  try {
    res.render("logs/index", {
      logs: await Log.find({}),
    });
  } catch (err) {
    res.status(404);
  }
};

const newLog = async (req, res) => {
  try {
    res.render("logs/new", {
      drinkList: await Drink.find({}),
    });
  } catch (err) {
    res.status(404);
  }
};

const create = async (req, res) => {
  try {
    const today = new Date();
    req.body.date = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`;
    await Log.create(req.body);
    res.redirect("logs");
  } catch (err) {
    res.status(404).json(err);
  }
};

const show = async (req, res) => {
  try {
    res.render("logs/show", {
      log: await Log.findById(req.params.id),
    });
  } catch (err) {
    res.status(404);
  }
};

const edit = async (req, res) => {
  try {
    res.render("logs/edit", {
      log: await Log.findById(req.params.id),
      drinkList: await Drink.find({})
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

const update = async (req, res) => {
  try {
    await Log.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/logs");
  } catch (err) {
    res.status(404).json(err);
  }
};

const deleteOne = async (req, res) => {
  try {
    const deletedLog = await Log.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedLog);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = {
  index,
  new: newLog,
  create,
  show,
  edit,
  update,
  delete: deleteOne,
};
