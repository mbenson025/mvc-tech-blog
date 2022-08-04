const { Comment } = require('../models');

const commentData = [
  {
    comment_content: 'test comment1',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_content: 'test comment2',
    user_id: 4,
    post_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
