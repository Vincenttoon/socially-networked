const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');


// Assign api routes based on User/Thought controllers
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;