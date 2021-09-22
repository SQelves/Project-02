console.log('CreateGiftExchange Script attached')

const createExchangeBtn = document.getElementById('createExchangeBtn')

 createExchangeBtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log("form submit clicked");

    var giftExchangeName = document.getElementById('giftExchangeName').value;
    var hostFirstName = document.getElementById('hostFirstName').value;
    var hostLastName = document.getElementById('hostLastName').value;
    var org = hostFirstName + hostLastName;
    var budget = document.getElementById('budget').value;
    let postRoute = '/api/exchanges/newExchange';

    var xhr = new XMLHttpRequest();
    xhr.open("POST", postRoute, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      exchangeName: giftExchangeName,
      exchangeOrg: org,
      exchangeBudget: budget

    }));
    
    

  });

  
  // document
  // .querySelector('#createExchangeBtn')
  // .addEventListener('submit', createExchangeFormHandler);
