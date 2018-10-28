const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },

  releaseDate: {
    type: String,
    required: true
  },

  originalPrice: {
    type: String,
    required: true
  },

  ratings: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);