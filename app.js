let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose
  .connect(`mongodb://localhost/wikipedia`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log(`Connected to MongoDB...`);
  })
  .catch(err => {
    console.log(`Something went wrong!!!!@#$%`);
  });

let countrySchema = new Schema({
  country: String,
  capital: String,
  area: Number,
  population: Number,
  currency: String
});

let Country = mongoose.model('Country', countrySchema);

let countries = [
  {
    country: 'USA',
    capital: 'Washington',
    area: 9833520,
    population: 327167434,
    currency: 'USD'
  },
  {
    country: 'Italy',
    capital: 'Rome',
    area: 301340,
    population: 60483973,
    currency: 'EUR'
  },
  {
    country: 'Germany',
    capital: 'Berlin',
    area: 357386,
    population: 83000000,
    currency: 'EUR'
  },
  {
    country: 'Canada',
    capital: 'Ottawa',
    area: 3855100,
    population: 37242571,
    currency: 'CAD'
  },
  {
    country: 'China',
    capital: 'Beijing',
    area: 9596961,
    population: 1403500365,
    currency: 'CNY'
  },
  {
    country: 'Sweden',
    capital: 'Stockholm',
    area: 450295,
    population: 10223505,
    currency: 'SEK'
  },
  {
    country: 'India',
    capital: 'New Delhi',
    area: 3287263,
    population: 1324171354,
    currency: 'INR'
  },
  {
    country: 'Netherlands',
    capital: 'Amsterdam',
    area: 41543,
    population: 17302139,
    currency: 'EUR'
  }
];

countries.forEach(value => {
  let country = new Country(value);
  country.save();
});

// let userSchema = new Schema({
//   login: String,
//   password: {
//     type: String,
//     minlength: 4
//   },
//   age: {
//     type: Number,
//     min: 0
//   },
//   student: Boolean,
//   country: String
// });

// let User = mongoose.model('User', userSchema);

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

// getUsers();

updateUser = async () => {
  // Option 1
  // let user = await User.findOne({ login: 'Peter' });
  // user.password = '4444';
  // await user.save();
  // console.log(`User updated`);

  // Option 2
  User.findOneAndUpdate({ login: 'Peter' }, { password: '7777' }, () => {
    console.log(`User updated`);
  });
};

// updateUser();

removeUser = async () => {
  let result = await User.deleteOne({ login: 'Peter' });
  console.log(result);
};

// removeUser();
