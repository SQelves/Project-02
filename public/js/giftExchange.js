console.log("exchange script attached");



const getGifts = function(returnedGifts){
    fetch('/api/gifts/displayGifts',{
      "method": "GET",
      "headers":{
        'Content-Type': 'application/json'
      }
    })
    .then(
      function(response){
        response.json().then(function(data){
          for(i=0;i<data.length;i++){
            var giftName = data[i].name;
            var giftDesc = data[i].description;
            var giftItem = giftName + giftDesc;
            // console.log(giftItem);
          }
        
        });
        
    
      }
    )

    .catch(function(err){
      console.log('Fetch Error :-S', err);
    });

    return response.json();
    
  }



