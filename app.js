const express = require('express');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const app = express();
const PORT = 3001;

mongoose.connect('mongodb://localhost:27017/ASM_ADN103', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('DB Connected!!!!!!'))
.catch(err => console.log('DB Error: ', err));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error');
});

// Start the server
app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});

module.exports = app;
