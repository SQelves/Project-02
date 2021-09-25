const router = require('express').Router();
const Exchange = require('../../models/Exchange');


router.post('/newExchange', (req, res) =>{
    console.log(req.body);
    Exchange.create({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       desc: req.body.desc,
    })
    .then((newExchange)=>{
        console.log('Route Hit');
        res.json(newExchange);
    })
    .catch((err)=>{
        res.json(err);
    });
});

router.get('/displayExchanges', async(req, res)=>{
  const exchangeData = await Exchange.findAll();
  console.log(exchangeData);
  return res.json(exchangeData);
});

module.exports = router;