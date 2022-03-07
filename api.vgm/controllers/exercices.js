const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Exercice = require("../models/Exercices");

//@desc     Get all exercices
//@Routes   GET /api/v1/exercices
//@access   Public
exports.getExercices = asyncHandler(async (req, res, next) => {
  const exercices = await Exercice.find();
  res
    .status(200)
    .json({ success: true, count: exercices.length, data: exercices });
});

//@desc     Get one exercice by Id
//@Routes   GET /api/v1/exercices/:id
//@access   Public
exports.getExercice = asyncHandler(async (req, res, next) => {
  const exercice = await Exercice.findById(req.params.id);

  if (!exercice) {
    return next(
      new ErrorResponse(`Exercice not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: exercice,
  });
});

// @desc    Create new exercice
// @route   POST /api/v1/exercices
// @access  Private
exports.createExercice = asyncHandler(async (req, res, next) => {
  const exercice = await Exercice.create(req.body);
  res.status(201).json({
    success: true,
    data: exercice,
  });
});

// @desc    Update exercice
// @route   PUT /api/v1/exercices/:id
// @access  Private
exports.updateExercice = asyncHandler(async (req, res, next) => {
  const exercice = await Exercice.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!exercice) {
    return next(
      new ErrorResponse(`Exercice not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: exercice });
});

// @desc    Delete exercice
// @route   DELETE /api/v1/exercices/:id
// @access  Private
exports.deleteExercice = asyncHandler(async (req, res, next) => {
  const exercice = await Exercice.findByIdAndDelete(req.params.id);

  if (!exercice) {
    return next(
      new ErrorResponse(`Exercice not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    msg: `delete exercice with id ${req.params.id}`,
  });
});
