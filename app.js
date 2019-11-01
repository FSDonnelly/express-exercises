let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose
  .connect(`mongodb://localhost/users`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Connected to MongoDB...`);
  })
  .catch(err => {
    console.log(`Something went wrong!!!!@#$%`);
  });

let userSchema = new Schema({
  login: String,
  password: {
    type: String,
    minlength: 4
  },
  age: {
    type: Number,
    min: 0
  },
  student: Boolean,
  country: String
});

let User = mongoose.model('User', userSchema);
let user1 = new User({
  login: 'Nancy',
  password: 'uiop',
  age: 20,
  student: true,
  country: 'Germany'
});

console.log(user1);
user1.save().then(() => {
  console.log(`Done saving to DB`);
});
