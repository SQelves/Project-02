const joinExchangeFormHandler = async (event) => {
    event.preventDefault();
  
    const userFirstName = document.querySelector('#userFirstName').value.trim();
    const userLastName = document.querySelector('#userLastName').value.trim();
    const dashesList = document.querySelector('#dashesList').value.trim();
    const giftName = document.querySelector('#giftName').value.trim();
    const giftDesc = document.querySelector('#giftDesc').value.trim();
    const price = document.querySelector('#price').value.trim();
  
    if (userFirstName && userLastName && dashesList && giftName && giftDesc && price) {
      const response = await fetch(`/api/homeRoutes`, {
        method: 'POST',
        body: JSON.stringify({ userFirstName, userLastName, dashesList, giftName, giftDesc, price}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/createGiftExchange');
      } else {
        alert('Failed to join Gift Exchange');
      }
    }
  };

  document
  .querySelector('#joinExchangeBtn')
  .addEventListener('submit', joinExchangeFormHandler);
