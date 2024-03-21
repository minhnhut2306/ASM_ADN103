// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { name, phone, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
      return res.json({
        success: "Người dùng đã tồn tại. Vui lòng đăng nhập.",
      });
    }

    const newUser = new User({ name, phone, email, password });

    await newUser.save();

    console.log(newUser.name, newUser.phone, newUser.email, newUser.password);

    res.json({
      success: "Đăng ký thành công. Đăng nhập ngay bây giờ!",
      user: newUser,
    });
  } catch (error) {
    console.error("Lỗi khi đăng ký người dùng:", error);

    res
      .status(500)
      .json({
        error: "Đã xảy ra lỗi khi đăng ký người dùng. Vui lòng thử lại.",
      });
  }
});

router.get("/login", async (req, res) => {
  const { email, password } = req.query;

  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      return res.json({ success: "Đăng nhập thành công" });
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

module.exports = router;
