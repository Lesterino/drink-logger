const Drink = require("../models/drink");
const Ingredient = require("../models/ingredient");
const Place = require("../models/place");

const index = async (req, res) => {
  try {
    res.render("drinks/index", {
      drinks: await Drink.find({}),
    });
  } catch (err) {
    res.status(404);
  }
};

const newDrink = async (req, res) => {
  try {
    res.render("drinks/new", {
      ingList: await Ingredient.find({}),
      placeList: await Place.find({}),
    });
  } catch (err) {
    res.status(404);
  }
};

const create = async (req, res) => {
  try {
    await Drink.create(req.body);
    res.redirect("drinks");
  } catch (err) {
    res.status(404);
  }
};

const show = async (req, res) => {
  try {
    res.render("drinks/show", {
      drink: await Drink.findById(req.params.id),
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

const edit = async (req, res) => {
  try {
    res.render("drinks/edit", {
      drink: await Drink.findById(req.params.id),
      ingList: await Ingredient.find({}),
      placeList: await Place.find({})
    });
  } catch (err) {
    res.status(404);
  }
};

const update = async (req, res) => {
  try {
    await Drink.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/drinks");
  } catch (err) {
    res.status(404).json(err);
  }
};

const deleteOne = async (req, res) => {
  try {
    await Drink.findByIdAndRemove(req.params.id);
    res.redirect("/drinks");
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = {
  index,
  new: newDrink,
  create,
  show,
  edit,
  update,
  delete: deleteOne,
};
