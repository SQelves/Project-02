console.log('Wish Script attached');

const giftList = document.getElementById('giftList');

const displayGifts = function(){
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
          giftItem = `Gift Name: ${giftName} Description: ${giftDesc}`;
          console.log(giftItem);
          var appendItem = document.createElement('li');
          appendItem.innerHTML = giftItem;
          giftList.appendChild(appendItem);
          console.log(giftList);
        }
      });
    }
  )
  .catch(function(err){
    console.log('Fetch Error :-S', err);
  });
}
  

const displayUsers = function(){
  fetch('/api/users/displayUsers',{
    "method": "GET",
    "headers":{
      'Content-Type': 'application/json'
    }
  })
  .then(
    function(response){
      response.json().then(function(data){
      for(i=0;i<data.length;i++){
        var userItems = data[i].name;
        console.log(userItems);
      }
      });
    }
  )
  .catch(function(err){
    console.log('Fetch Error :-S', err);
  });
}

displayGifts();
displayUsers();