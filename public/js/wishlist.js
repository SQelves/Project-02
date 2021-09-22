const wishlistFormHandler = async (event) => {
    event.preventDefault();
  
    const wishlistName = document.querySelector('#wishlistName').value.trim();
    const wishlistPriceLimit = document.querySelector('#wishlistPriceLimit').value.trim();
    const wishlistRules = document.querySelector('#wishlistRules').value.trim();
    const wishlistRSVP = document.querySelector('#wishlistRSVP').value.trim();
    const wishlistExchangeDate = document.querySelector('#wishlistExchangeDate').value.trim();
    const wishlistDescription = document.querySelector('#wishlist-desc').value.trim();
  
    if (wishlistName && wishlistPriceLimit && wishlistRules && wishlistRSVP && wishlistExchangeDate && wishlistDescription) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ wishlistName, wishlistPriceLimit, wishlistRules, wishlistRSVP, wishlistExchangeDate, wishlistDescription }),
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


  document
  .querySelector('#new-wishlist-form')
  .addEventListener('submit', wishlistFormHandler);
  