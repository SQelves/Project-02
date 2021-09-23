const router = require('express').Router();
const Gift = require('../../models/Gifts');

router.post('/newGift', (req, res)=>{
    console.log(req.body);
    Gift.create({
        name: req.body.name,
        description: req.body.description
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