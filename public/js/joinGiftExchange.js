console.log('Join Script attached');

var createListBtn = document.getElementById('createListBtn');

createListBtn.addEventListener('click', function(event){
  event.preventDefault();
  var userFirst = document.getElementById('userFirstName').value;
  var userLast = document.getElementById('userLastName').value;
  var userName = userFirst + " " + userLast;
  var userDesc = document.getElementById('userDesc').value;
  console.log('Submit Button Clicked!');
  let postRoute = '/api/exchanges/newExchange';

  var xhr = new XMLHttpRequest();
  xhr.open("POST", postRoute, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
      firstName: userFirst,
      lastName: userLast,
      desc: userDesc,
  }));
})









// const dashesList = document.getElementById('dashesList');

// const displayExchanges = function(){
//   fetch('/api/exchanges/displayExchanges', {
//     "method": "GET",
//     "headers":{
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(
//     function(response){
//       response.json().then(function(data){
//         for(i=0;i<data.length;i++){
//           var exchangeItems = data[i].exchangeName;
//           var appendItem = document.createElement('option');
//           appendItem.value = exchangeItems;
//           dashesList.appendChild(appendItem)
//           console.log(dashesList);
//         }
//       });
//     }
//   )
//   .catch(function(err){
//     console.log('Fetch Error :-S', err);
//   });
// }

// displayExchanges();