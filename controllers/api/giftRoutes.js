const router = require('express').Router();
const Gift = require('../../models/Gifts');

router.post('/newGift', (req, res)=>{
    console.log(req.body);
    Gift.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        giftName: req.body.giftName
    })
    .then((newGift)=>{
        console.log("Route Hit");
        res.json(newGift);
    })
    .catch((err)=>{

        res.json(err);
    });
});

router.get('/displayGifts', async(req, res)=>{
    const giftsData = await Gift.findAll();
    console.log(giftsData);
    return res.json(giftsData);
})

module.exports = router;