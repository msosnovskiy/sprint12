const router = require('express').Router();
const promisesFs = require('fs').promises;
const path = require('path');

const usersDirectory = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  promisesFs.readFile(usersDirectory, { encoding: 'utf-8' })
    .then((data) => {
      const users = JSON.parse(data);
      if (!users) {
        res.send({ message: 'Запрашиваемый ресурс не найден' });
        return;
      }
      res.send(users);
    });
});

router.get('/:id', (req, res) => {
  promisesFs.readFile(usersDirectory, { encoding: 'utf-8' })
    .then((data) => {
      const users = JSON.parse(data);
      const user = users.filter((item) => item._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.send(user);
    });
});

// router.get('/users/:id', doesUserExist);
// router.get('/users/:id', sendUser);

module.exports = router;
