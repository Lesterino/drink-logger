const Place = require("../models/place");

const index = async (req, res) => {
  try {
    const places = await Place.find({});
    res.render("places/index", {
      places,
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
    const newPlace = await Place.create(req.body);
    res.redirect("places/");
  } catch (err) {
    res.status(404).json(err);
  }
};

const show = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    res.render("places/show", {
      place,
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
    await Place.findByIdAndDelete(req.body);
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
