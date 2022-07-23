const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  console.log(req.session.user_id);
  try {
    const postFind = Post.findAll({
      raw: true,
      include: [
        {
          model: User,
          attributes: ['id', 'user_id'],
          include: {
            attributes: ['username'],
          },
        },
      ],
    });
    res.status(200).json(postFind);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
