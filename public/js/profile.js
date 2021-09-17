const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const wishlist_info = document.querySelector('#wishlist-info').value.trim();
  const description = document.querySelector('#wishlist-desc').value.trim();

  if (name && wishlist_info && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, wishlist_info, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create wishlist');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('list-id')) {
    const id = event.target.getAttribute('list-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete wishlist');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
