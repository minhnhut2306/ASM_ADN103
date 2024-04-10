const UserModel = require("../User/UserModel");
const AdminModel = require("../Admin/AdminModel");
const bcrypt = require("bcryptjs");

const register = async (fullName, email, phoneNumber, password) => {
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error("Người dùng đã tồn tại");
    }
    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    await newUser.save();
    return newUser;
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

const loginAdmin = async (username, password) => {
  try {
    const admin = await AdminModel.findOne({ username, password });
    return admin;
  } catch (error) {
    throw error;
  }
};

const insert = async (username, password) => { 
  try {
    const admin = await AdminModel.create({ username, password });
    return admin;
  } catch (error) {
    throw error;
  }
};

const getuserid = async (userId) => {
  try {
    const user = await UserModel.find({ userId: userId });
    return user;
  } catch (error) {
    throw error; // Throw the error for proper handling
  }
};



module.exports = { register, login,loginAdmin,insert,getuserid};
