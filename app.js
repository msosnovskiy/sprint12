const express = require('express');
const path = require('path');
const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, '/public')));
app.use('/users', users);
app.use('/cards', cards);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
