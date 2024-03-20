var express = require('express');
var router = express.Router();
const users = [ 
  {name: "NamDM",email:"DuongMinhNam@gmail.com",phone:"0369898937",password:"123456"},
  {name: "Chip",email:"DuongMinhChip@gmail.com",phone:"03698989370",password:"789012"}
];
  
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login',function(req,res,next){
  //Code viết ở đây
  // Nhấn vào 2 biến email và password = phương thức get
  // Nếu email và pass word tồn tại trong mảng user thì có nghĩa là login thành công và ngược lại
    
    const { email, password } = req.query;

    // Tìm người dùng có Email phù hợp
    const user = users.find(user => user.email === email);

    // Kiểm tra xem người dùng có tồn tại và mật khẩu có khớp không
    if (user && user.password === password) {
        res.json({'text':'Đăng nhập thành công'});
    } else {
        res.json({'text':'Xem lại bài code đi mài'});
    }
});

router.post('/register',function(req,res,next){
  //Code viết ở đây
  // Nhập vào 2 biến email và password = phương thức Post
  //Đăng ký email
  // Nếu email và pass word tồn tại trong mảng user thì có nghĩa là Register thành công và ngược lại

  const { name, email, phone, password } = req.body;

  // Kiểm tra xem người dùng đã tồn tại trong mảng users chưa
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    res.json({success:'Người dùng đã tồn tại Xem Lại Code đi mày'});
  } else {
    // Tạo một đối tượng mới người dùng
    const NewUser = { name, email, phone, password };
    users.push(NewUser);
    res.json({ success: 'Đăng ký thành công Vào đc rồi á Yessss', user: NewUser });
    console.log(users);
  }
});

module.exports = router;
