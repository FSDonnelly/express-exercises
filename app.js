let express = require('express');
let app = express();

app.get('/', (req, res) => res.send(`<h1>Home Page</h1>`));

app.get('/contacts', (req, res) => res.send(`<h1>Contacts Page</h1>`));

app.get('*', (req, res) => res.send(`<h1>404 Page Not Found</h1>`)); //Written below all other get methods

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${PORT}/`);
});
