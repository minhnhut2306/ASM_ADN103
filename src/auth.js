const express = require("express");
const router = express.Router();
const {
  register,
  login,
  loginAdmin,
  insert,
  getuserid,
} = require("../models/User/UserController");

router.post("/registeruser", async (req, res) => {
  const { fullName, phoneNumber, email, password } = req.body;
  try {
    const existingUser = await register(fullName, email, phoneNumber, password);
    if (existingUser) {
      return res.json({
        success: "Đăng ký thành công!",
        user: existingUser,
      });
    }
  } catch (error) {
    console.error("Lỗi khi đăng ký người dùng:", error);
    res.status(500).json({
      error: "Lỗi",
    });
  }
});

router.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await login(email, password);
    if (user) {
      return res.json({ success: "Đăng nhập thành công!", userId: user.id });
    } else {
      return res.status(401).json({ error: "Email hoặc mật khẩu không đúng" });
    }
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    res
      .status(500)
      .json({ error: "Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại." });
  }
});

router.get("/insertadmin", async function (req, res) {
  const { username, password } = req.query;
  try {
    const insertadmin = await insert(username, password);
    if (insertadmin) {
      return res.json({
        success: "Thành công!",
        user: insertadmin,
      });
    }
  } catch (error) {
    console.error("Lỗi", error);
    res.status(500).json({
      error: "Lỗi",
    });
  }
});

router.post("/loginAdmin", async function (req, res) {
  let { username, password } = req.body;
  try {
    const admin = await loginAdmin(username, password);
    if (admin) {
      res.json({ message: "Đăng nhập thành công", admin });
    } else {
      res
        .status(404)
        .json({ message: "Tên đăng nhập hoặc mật khẩu không chính xác" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Đã xảy ra lỗi khi đăng nhập" });
  }
});

router.get("/userid/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getuserid(userId);
    if (!user || user.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Lỗi Sever" });
  }
});

router.get("/login", function (req, res) {
  res.render("login");
});
module.exports = router;
