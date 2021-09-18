const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#wishlist-name').value.trim();
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
        document.location.replace('/wishlist');
      } else {
        alert('Failed to create wishlist');
      }
    }
  };
  