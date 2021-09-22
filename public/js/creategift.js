
console.log("Gift Exchange Script attached");

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    var giftName = document.getElementById('giftName').value;
    var giftDesc = document.getElementById('giftDesc').value;
    console.log('Submit Button Clicked!')
    let postRoute = "/api/gifts/newGift";
    console.log(`Gift Name: ${giftName} Gift Desc: ${giftDesc}`);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", postRoute, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        name: giftName,
        description: giftDesc
    }));

});