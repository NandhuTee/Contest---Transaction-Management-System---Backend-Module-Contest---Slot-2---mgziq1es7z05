const mongoose = require('mongoose');

// The schema consists of a single field:
// name (String): Represents the name of the category. It is a required field.

const categorySchema = new mongoose.Schema({
  //Write your code here
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
