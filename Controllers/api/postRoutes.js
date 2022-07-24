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
          attributes: ['id', 'user_id', 'created_at'],
          include: {
            attributes: ['username'],
          },
        },
        {
          model: Comment,
          attributes: ['id', 'comment_content', 'user_id'],
        },
      ],
    });
    res.status(200).json(postFind);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
