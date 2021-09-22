const newFormHandler = async (event) => {
    event.preventDefault();
  
    const wishlistName = document.querySelector('#wishlist-name').value.trim();
    const wishlistInfo = document.querySelector('#wishlist-info').value.trim();
    const wishlistPriceLimit = document.querySelector('#wishlistPriceLimit').value.trim();
    const wishlistDescription = document.querySelector('#wishlist-desc').value.trim();
  
    if (wishlistName && wishlistInfo && wishlistPriceLimit && wishlistDescription) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ wishlistName, wishlistInfo, wishlistPriceLimit, wishlistDescription }),
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
  