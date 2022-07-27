const destroyComment = (e) => {
  let btnId = e.target.id;
  let dbId = e.target.dataset.id;

  if (btnId == 'delete-btn') {
    e.target.parentElement.parentElement.style.display = 'none';
    const response = fetch(`/api/comments/${dbId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  }
};
document.addEventListener('click', destroyComment);
