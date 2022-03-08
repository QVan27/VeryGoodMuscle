const mongoose = require("mongoose");
// const slugify = require("slugify");

const ExerciceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Please add a category"],
  },
  content: {
    type: String,
    required: [true, "Please add some content"],
  },
  image: {
    type: String,
    required: [true, "Please add an image"],
  },
});

//Create user slug from name
// BootcampSchema.pre("save", function (next) {
//   this.slug = slugify(this.username, { lower: true });
//   next();
// });

module.exports = mongoose.model("Exercice", ExerciceSchema);
