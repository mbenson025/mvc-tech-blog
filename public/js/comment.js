const newFormHandler = async (e) => {
  e.preventDefault();

  const commentContent = document
    .querySelector('#comment-content')
    .value.trim();
  const postId = document.querySelector('#comment-id').dataset.id;
  console.log(commentContent);
  console.log(postId);

  if (commentContent && postId) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        commentContent: commentContent,
        postId: postId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', newFormHandler);
