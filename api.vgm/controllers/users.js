//@desc     Get all user
//@Routes   GET /api/v1/users
//@access   Public
exports.getUsers = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all users" });
};

//@desc     Get one user by Id
//@Routes   GET /api/v1/users/:id
//@access   Public
exports.getUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: `get user ${req.params.id}` });
};
