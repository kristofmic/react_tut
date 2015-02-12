var
  express = require('express'),
  router = express.Router(),
  data;

data = [
  {author: 'Pete Hunt', text: 'This is one comment'},
  {author: 'Jordan Walke', text: 'This is *another* comment'}
];

router.get('/comments', getComments);
router.post('/comments', postComments);

module.exports = router;

function getComments(req, res) {
  res.status(200).json(data);
}

function postComments(req, res) {
  data.push(req.body);
  res.status(200).json(data);
}