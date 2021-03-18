const router = require('express').Router()

router.get('/', (req, res) => {
  res.send({
    "status": "estoy bien"
  });
});

module.exports = router