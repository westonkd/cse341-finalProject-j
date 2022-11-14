const mongodb = require("../database/connect");
const ObjectId = require("mongodb").ObjectId;
const dotenv = require("dotenv");
dotenv.config();

const getAllBooks = async (req, res) => {
  // #swagger.description = 'See all books'
  try {
    const recipes = await mongodb
      .getDatabase()
      .db(process.env.DB_NAME)
      .collection("Recipes")
      .find();
    recipes.toArray((err, lists) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllBooks,
};