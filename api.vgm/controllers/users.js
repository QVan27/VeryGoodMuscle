// const User = require("../models/User");

//@desc     Get all user
//@Routes   GET /api/v1/users
//@access   Public
exports.getUsers = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all users" });

  // try {
  //   const users = await User.find();
  //   res.status(200).json({ success: true, data: users });
  // } catch (err) {
  //   res.status(400).json({
  //     success: false,
  //   });
  // }
};

//@desc     Get one user by Id
//@Routes   GET /api/v1/users/:id
//@access   Public
exports.getUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: `get user ${req.params.id}` });

  // try {
  //   const user = await User.findById(req.params.id);

  //   if (!user) {
  //     res.status(400).json({ success: false });
  //   }

  //   res.status(200).json({
  //     success: true,
  //     data: user,
  //   });
  // } catch (err) {
  //   res.status(400).json({
  //     success: false,
  //   });
  // }
};

// @desc    Create new user
// @route   POST /api/v1/users/:id
// @access  Private
// exports.createUser = async (req, res, next) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json({
//       success: true,
//       data: user,
//     });
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       msg: "Server error",
//     });
//   }
// };

// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Private
// exports.updateUser = async (req, res, next) => {
//   const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   if (!user) {
//     res.status(400).json({ success: false });
//   }

//   res.status(200).json({ success: true, data: user });
// };

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
// @access  Private
// exports.deleteUser = (req, res, next) => {
//   res.status(200).json({
//     success: true,
//     msg: `delete user with id ${req.params.id}`,
//   });
// };
