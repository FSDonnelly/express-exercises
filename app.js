let express = require('express');
let app = express();

let joke = require('one-liner-joke');

// app.get('/', (req, res) => res.send(`<h1>Home Page</h1>`));

// app.get('/contacts', (req, res) => res.send(`<h1>Contacts Page</h1>`));

// app.get('*', (req, res) => res.send(`<h1>404 Page Not Found</h1>`)); //Written below all other get methods

//---- Examples of Route Parameters ----//

// app.get('/shop/:category/:subcategory', (req, res) => {
//   res.send(`<h4>Category: ${req.params.category}</h4>
//   <h4>Subcategory: ${req.params.subcategory}</h4>`);
// });

// app.get('/shop/laptop', (req, res) => {
//   res.send('<h4>Category: Laptop</h4>');
// });

// app.get('/shop/phone', (req, res) => {
//   res.send('<h4>Category: Phone</h4>');
// });

//---- Examples of Query Strings ----//

// app.get('/:cat', (req, res) => {
//   let page;
//   if (req.query.page === undefined) {
//     page = 1;
//   } else {
//     page = req.query.page;
//   }
//   res.send(
//     `<h1>${req.params.cat.toUpperCase()}</h1><h3>Page ${page}</h3><h4>${
//       req.query.number
//     }</h4>`
//   );
// });

//---- Route TASK ----//
// 1) Create route /joke/:cat/:num response is cat=(sport,it,attitude,love) num= number of jokes in res
// 2) Create 404 Route for non available catrgory

let availableTags = ['sport', 'IT', 'attitude', 'love'];

app.get('/joke/:num', (req, res) => {
  let num = req.params.num;
  let result = '';
  for (let i = 0; i < num; i++) {
    result += `<h4>${joke.getRandomJoke().body}</h4>***`;
  }
  res.send(result);
});

app.get('/joke/:tag/:num', (req, res) => {
  let tag = req.params.tag;
  let num = req.params.num;
  let result = '';

  if (availableTags.includes(tag)) {
    for (let i = 0; i < num; i++) {
      result += `<h4>${joke.getRandomJokeWithTag(tag).body}</h4>***`;
    }
  } else {
    result = 'No jokes for this tag';
  }

  res.send(result);
});

app.get('*', (req, res) => res.send(`<h1>404 No jokes for this tag!</h1>`));

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${PORT}/`);
});
