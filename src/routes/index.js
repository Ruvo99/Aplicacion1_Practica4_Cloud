const router = require('express').Router();

const helloRoute = require('./vivo');

router.use('/revisasivivo', helloRoute);

module.exports = router;