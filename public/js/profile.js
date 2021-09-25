console.log('proflie script attached')
var dynamicName = document.getElementById('dynamicName').innerHTML;
var giftsUl = document.getElementById('giftsUl');
console.log(giftsUl);
console.log(dynamicName);


const displayGifts = function(){
  fetch('/api/gifts/displayGifts',{
    'method': 'GET',
    'headers':{
      'Content-Type': 'application/json'
    }
  })
  .then(
    function(response){
      response.json().then(function(data){

        for(i=0;i<data.length;i++){
          var giftFN = data[i].firstName;
          var giftLN = data[i].lastName;
          var giftFullName = `${giftFN} ${giftLN}`;
          var giftNm = data[i].giftName;
          var appendItem = document.createElement('li');
          console.log('Gifts' + giftsUl.innerHTML);
       
          
          if(giftFullName===dynamicName){
          console.log('Gift name is equal to dynamic')
              appendItem.innerHTML = giftNm
            appendItem.setAttribute('class', 'collection-item')
            giftsUl.appendChild(appendItem);
        
          }
        }

      });
    }
  )
  .catch(function(err){
    console.log('Fetch Error :-S', err);
  });
}

displayGifts();

