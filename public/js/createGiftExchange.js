const createExchangeFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#giftExchangeName').value.trim();
    const date = document.querySelector('#giftExchangeDate').value.trim();
    const time = document.querySelector('#giftExchangeTime').value.trim();
    const RSVP = document.querySelector('#RSVPDeadline').value.trim();
    const hostFirstName = document.querySelector('#hostFirstName').value.trim();
    const hostLastName = document.querySelector('#hostLastName').value.trim();
    const participate = document.querySelector('#participate').value.trim();
    const budget = document.querySelector('#budget').value.trim();
    const message = document.querySelector('#message').value.trim();
  
    if (name && date && time && RSVP && hostFirstName && hostLastName && participate && budget && message) {
      const response = await fetch(`/api/homeRoutes`, {
        method: 'POST',
        body: JSON.stringify({ name, date, time, RSVP, hostFirstName, hostLastName, participate, budget, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/createGiftExchange');
      } else {
        alert('Failed to create new Gift Exchange');
      }
    }
  };

  document
  .querySelector('#createExchangeBtn')
  .addEventListener('submit', createExchangeFormHandler);
  
