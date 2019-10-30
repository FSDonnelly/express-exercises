let mongoose = require('mongoose');

mongoose
  .connect(`mongodb://localhost/users`)
  .then(() => {
    console.log(`Connected to MongoDB...`);
  })
  .catch(err => {
    console.log(`Something went wrong!!!!@#$%`);
  });
