const router = require('express').Router();
const promisesFs = require('fs').promises;
const path = require('path');

router.get('/', (req, res) => {
  promisesFs.readFile((path.join(__dirname, '../data/cards.json')), { encoding: 'utf-8' })
    .then((data) => {
      const cards = JSON.parse(data);
      if (!cards) {
        res.send({ message: 'Запрашиваемый ресурс не найден' });
        return;
      }
      res.send(cards);
    });
});

module.exports = router;
