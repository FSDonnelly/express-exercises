let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send(`<h1>Home Page</h1>`);
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${PORT}/`);
});
