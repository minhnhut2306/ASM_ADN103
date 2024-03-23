const express = require("express");
const router = express.Router();
const { register, login } = require("../models/User/UserController");

router.post("/register", async (req, res) => {
  const { name, phone, email, password } = req.body;

  try {
    const existingUser = await register(name, email, phone, password);
    if (existingUser) {
      return res.json({
        success: "Đăng ký thành công. Đăng nhập ngay bây giờ!",
        user: existingUser,
      });
    }
  } catch (error) {
    console.error("Lỗi khi đăng ký người dùng:", error);
    res.status(500).json({
      error: "Đã xảy ra lỗi khi đăng ký người dùng. Vui lòng thử lại.",
    });
  }
});

router.get("/login", async (req, res) => {
  const { email, password } = req.query;

  try {
    const user = await login(email, password);
    if (user) {
      return res.json({ success: "Đăng nhập thành công" });
    } else {
      return res
        .status(401)
        .json({ error: "Email hoặc mật khẩu không đúng" });
    }
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    res
      .status(500)
      .json({ error: "Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại." });
  }
});

module.exports = router;
