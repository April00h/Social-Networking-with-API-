const router = require('express').Router();
const thoughtRoutes = require('./tRoutes');
const userRoutes = require('./uRoutes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;