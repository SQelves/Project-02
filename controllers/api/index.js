const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const giftRoutes = require('./giftRoutes')

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/gifts', giftRoutes)

module.exports = router;
