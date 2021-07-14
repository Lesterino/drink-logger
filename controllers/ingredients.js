const Ingredient = require("../models/ingredient");

const index = async (req, res) => {
  try {
    const allIng = await Ingredient.find({});
    res.render("ingredients/index", {
      allIng,
    });
  } catch (err) {
    res.status(404);
  }
};

const newIngredients = async (req, res) => {
  try {
    res.render("ingredients/new");
  } catch (err) {
    res.status(404);
  }
};

const create = async (req, res) => {
  try {
    const newIng = await Ingredient.create(req.body);
    console.log(newIng);
    res.redirect("ingredients");
  } catch (err) {
    res.status(404).json(err);
  }
};

const show = async (req, res) => {
  try {
    const ing = await Ingredient.findById(req.params.id);
    res.render("ingredients/show", {
      ing,
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

const edit = async (req, res) => {
  try {
    res.render("ingredients/edit", {
      ing: await Ingredient.findById(req.params.id),
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

const update = async (req, res) => {
  try {
    await Ingredient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/ingredients");
  } catch (err) {
    res.status(404).json(err);
  }
};

const deleteOne = async (req, res) => {
  try {
    const deletedIng = await Ingredient.findByIdAndDelete(req.body);
    res.redirect("/ingredients");
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = {
  index,
  new: newIngredients,
  create,
  show,
  edit,
  update,
  delete: deleteOne,
};
