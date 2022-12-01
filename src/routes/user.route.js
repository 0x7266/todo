const { Router } = require('express');

const router = Router();

// router.get('/', getUsers);
// router.get('/:id', getUser);
router.post('/login', loginUser);
router.post('/signup', signupUser);
// router.patch('/:id', editUser);
// router.delete('/:id', deleteUser);

module.exports = router;
