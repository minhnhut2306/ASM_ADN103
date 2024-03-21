var express = require('express');
var router = express.Router();

var User = require('../modules/user/UserModule');


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res) {
  const { email, password } = req.query;
  const user = user.find(u => u.email === email && u.password === password);
  if (user) {
    res.render('index', { kq: 'Đăng nhập thành công' });
    res.json(user)
  }
  else {
    res.render('index', { kq: 'Đăng nhập thất bại' })
  }
})

router.post('/register', async function (req, res) {
  let { name, email, phone, password } = req.body;
  let user = { name: name, email: email, phone: phone, password: password }
  if (user == undefined) {
    res.json("Ban can nhap day du thong tin");
  }
  else {
    let checkEmail = await User.findOne({ email: user.email })
    if (checkEmail) {
      console.log(checkEmail);
      res.json("email trung");
    }
    else {
      let newUser = new User({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password
      })
      await newUser.save();
      res.json("Thanh cong")
      res.json(newUser);
    }
  }

})

module.exports = router;