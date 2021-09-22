const profileFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#profileName').value.trim();
  const wishlist = document.querySelector('#profileWishlist').value.trim();
  const giftExchanges = document.querySelector('#profileGiftExchanges').value.trim();
  const giftIdeas = document.querySelector('#profileGiftIdeas').value.trim();

  if (name && wishlist && giftExchanges && giftIdeas) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, wishlist, giftExchanges, giftIdeas }),
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
  .querySelector('#new-profile-form')
  .addEventListener('submit', profileFormHandler);

document
  .querySelector('#profile-list')
  .addEventListener('click', delButtonHandler);
