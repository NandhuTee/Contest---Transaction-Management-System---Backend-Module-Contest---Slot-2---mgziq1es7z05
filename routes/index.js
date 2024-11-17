const router = require('express').Router();

router.use('/auth', require('./authRoutes'));
router.use('/money', require('./transactionRoutes'));

module.exports = router;
