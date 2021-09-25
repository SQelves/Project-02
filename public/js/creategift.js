
console.log("Gift Script attached");

const submitBtn = document.getElementById('joinExchangeBtn');

submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    var userFist = document.getElementById('userFirstName').value;
    var userLast = document.getElementById('userLastName').value;
    var giftName = document.getElementById('giftName').value;
    
    console.log('Submit Button Clicked!')
    let postRoute = "/api/gifts/newGift";


    var xhr = new XMLHttpRequest();
    xhr.open("POST", postRoute, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        firstName: userFist,
        lastName: userLast,
        giftName: giftName
    }));

});