const express = require('express');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/ASM_ADN103', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('DB Connected!!!!!!'))
.catch(err => console.log('DB Error: ', err));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors()); 

app.use('/', indexRouter);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: err.message || 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
