let express = require('express');
let router = express.Router();
let studentRouter = require('./students');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json("App ready");
});

router.use('/students', studentRouter);

module.exports = router;