const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    
    // Pass serialized data and session flag into template
    res.render('homepage', 
    { 
      projects: [], 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});



// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      
    });

    const user = userData.get({ plain: true });
    
    console.log(user.name);
    res.render('profile', {
      user,
      logged_in: true,
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/createGiftExchange', (req, res)=>{
  res.render('createGiftExchange')
});

router.get('/wishlist', (req, res)=>{
  if (req.session.logged_in) {
    res.render('wishlist', {
      // user,
      // logged_in: true,
      
    });
    return;
  }

  res.redirect('/login');
});

router.get('/joinGiftExchange', (req, res)=>{
  res.render('joinGiftExchange')
});

module.exports = router;
