const router = require('express').Router();
const Exchange = require('../../models/Exchange');


router.post('/newExchange', (req, res) =>{
    console.log(req.body);
    Exchange.create({
        exchangeName: req.body.exchangeName,
        exchangeOrg: req.body.exchangeOrg,
        exchangeBudget: req.body.exchangeBudget
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