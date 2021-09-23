const router = require('express').Router();
const userRoutes = require('./userRoutes');
const giftRoutes = require('./giftRoutes');
const exchangeRoutes = require('./exchangeRoutes');

router.use('/users', userRoutes);
router.use('/exchanges', exchangeRoutes);
router.use('/gifts', giftRoutes)

module.exports = router;
