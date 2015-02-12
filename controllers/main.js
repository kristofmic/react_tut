var
  express = require('express'),
  router = express.Router();

router.get('/', get);
router.get('/health', healthCheck);

module.exports = router;

function get(req, res) {
  res.render('index');
}

function healthCheck(req, res) {
  res.send({});
}