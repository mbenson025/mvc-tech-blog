async function editFormHandler(e) {
  e.preventDefault();

  const title = document.querySelector('#post-title-id').value;
  const postContent = document.querySelector('#post-content').value;
  const postId = document.querySelector('#post-id').dataset.id;
  const btnId = e.target.id;
  console.log(btnId);

  console.log(title);
  console.log(postContent);
  console.log(postId);

  if (btnId == 'save-btn') {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_content: postContent,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  if (btnId == 'delete-btn') {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.edit-post-form')
  .addEventListener('click', editFormHandler);
