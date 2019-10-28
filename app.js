let express = require('express');
let app = express();

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

app.get('/:cat', (req, res) => {
  let page;
  if (req.query.page === undefined) {
    page = 1;
  } else {
    page = req.query.page;
  }
  res.send(
    `<h1>${req.params.cat.toUpperCase()}</h1><h3>Page ${page}</h3><h4>${
      req.query.number
    }</h4>`
  );
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${PORT}/`);
});
