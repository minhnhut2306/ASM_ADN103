//NhieuUser
const express = require('express');
const router = express.Router();
const User = require('../models/User/UserModel');

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    console.log('Users:', users);
    res.json(users);
  } catch (error) {
    console.error('lỗi', error);
    res.status(500).json({ error: 'lỗi' });
  }
});

module.exports = router;
