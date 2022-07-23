const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const homeData = await Post.findAll({
      attributes: ['user_id', 'title', 'content'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const posts = homeData.map((post) => post.get({ plain: true }));

    res.render('home', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
