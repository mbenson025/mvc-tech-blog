//comment route based on project route from mvc mini proj(act 28)
const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  Comment.findAll({
    include: {
      model: User,
      attributes: ['id', 'username'],
    },
  })
    .then((cData) => res.json(cData))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/', withAuth, async (req, res) => {
  Comment.create({
    comment_content: req.body.commentContent,
    post_id: req.body.postId,
    user_id: req.session.user_id,
  })
    .then((cData) => res.json(cData))

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
