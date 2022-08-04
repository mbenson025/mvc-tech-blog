const { Post } = require('../models');

const postData = [
  {
    title: 'MVC associations cause major issues for developer',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    user_id: 3,
  },
  {
    title: 'Is C+++ the future of programming?',
    post_content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user_id: 2,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
