const router = require('express').Router();
// const { Comment, Post, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    await res.json('get test');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
