const router = require('express').Router();
const promisesFs = require('fs').promises;
const path = require('path');

router.get('/', (req, res) => {
  promisesFs.readFile((path.join(__dirname, '../data/users.json')), { encoding: 'utf-8' })
    .then((data) => {
      const users = JSON.parse(data);
      res.send(users);
    });
});

module.exports = router;
