const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
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
          attributes: ['id', 'comment_content', 'user_id', 'created_at'],
        },
      ],
    });
    res.status(200).json(postFind);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create posts
router.post('/', withAuth, (req, res) => {
  console.log(req, res);

  Post.create({
    title: req.body.title,
    post_content: req.body.post_content,
    user_id: req.session.user_id,
  })
    .then((newPost) => res.json(newPost))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

//edit posts
router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      post_content: req.body.post_content,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((pData) => {
      if (!pData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(pData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
