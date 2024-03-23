const UserModel = require("../User/UserModel");
const bcrypt = require("bcryptjs");

const register = async (name, email, phone, password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = new UserModel({ name, email, phone, password: hash });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const user = await UserModel.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

module.exports = { register, login };
