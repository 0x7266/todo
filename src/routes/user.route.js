const { Router } = require('express');

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;
