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

getUsers = async () => {
  let users = await User.find()
    .where('age')
    .gt(25) // gt = greater than for mongoose .where()
    .lt(35) // lt = less than
    .limit(3)
    .sort({ age: 1 }); // sort by key 1 ascending -1 descending
  // .select({ login: true, password: true });
  console.log(users);
};

// To find alll mongoose functions goto mongoose.com -> API -> Query

getUsers();

updateUser = async () => {
  let user = await User.findOne({ login: 'Peter' });
  user.password = '4444';
  await user.save();
  console.log(`User updated`);
};

updateUser();
