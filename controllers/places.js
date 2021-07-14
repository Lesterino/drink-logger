const Place = require("../models/place");

const index = async (req, res) => {
  try {
    res.render("places/index", {
      places: await Place.find({}),
    });
  } catch (err) {
    res.status(404);
  }
};

const newPlace = async (req, res) => {
  try {
    res.render("places/new");
  } catch (err) {
    res.status(404);
  }
};

const create = async (req, res) => {
  try {
    await Place.create(req.body);
    res.redirect("places/");
  } catch (err) {
    res.status(404).json(err);
  }
};

const show = async (req, res) => {
  try {
    res.render("places/show", {
      place: await Place.findById(req.params.id),
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

const edit = async (req, res) => {
  try {
    res.render("places/edit", {
      place: await Place.findById(req.params.id),
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

const update = async (req, res) => {
  try {
    await Place.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/places");
  } catch (err) {
    res.status(404).json(err);
  }
};

const deleteOne = async (req, res) => {
  try {
    await Place.findByIdAndRemove(req.params.id);
    res.redirect("/places");
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = {
  index,
  new: newPlace,
  create,
  show,
  edit,
  update,
  delete: deleteOne,
};
