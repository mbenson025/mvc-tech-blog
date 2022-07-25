const newFormHandler = async (e) => {
  e.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const postContent = document.querySelector('#post-content').value.trim();
  console.log(title);
  console.log(postContent);

  if (title && postContent) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, post_content: postContent }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('.create-post-form')
  .addEventListener('submit', newFormHandler);
