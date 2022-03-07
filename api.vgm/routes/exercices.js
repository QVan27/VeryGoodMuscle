const express = require("express");
const {
  getExercices,
  getExercice,
  createExercice,
  updateExercice,
  deleteExercice,
} = require("../controllers/exercices");

const router = express.Router();

router.route("/").get(getExercices).post(createExercice);
router.route("/:id").get(getExercice).put(updateExercice).delete(deleteExercice);

module.exports = router;
