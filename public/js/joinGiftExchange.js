console.log('Join Script attached');

const dashesList = document.getElementById('dashesList');

const displayExchanges = function(){
  fetch('/api/exchanges/displayExchanges', {
    "method": "GET",
    "headers":{
      'Content-Type': 'application/json'
    }
  })
  .then(
    function(response){
      response.json().then(function(data){
        for(i=0;i<data.length;i++){
          var exchangeItems = data[i].exchangeName;
          var appendItem = document.createElement('option');
          appendItem.value = exchangeItems;
          dashesList.appendChild(appendItem)
          console.log(dashesList);
        }
      });
    }
  )
  .catch(function(err){
    console.log('Fetch Error :-S', err);
  });
}

displayExchanges();