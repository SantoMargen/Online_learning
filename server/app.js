require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = 'mongodb://localhost:27017/Online_learningDB';
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Mongoose is connected!!!!');
    }
  }
);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
