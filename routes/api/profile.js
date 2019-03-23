const express = require('express');
const router = express.Router();

// Profile information for the user and more, location, bio, experiences and more. 
// @route GET api/profile/test
// @desc  Tests profile route
// @access public
router.get('/test', (req, res) => res.json({msg: "Profile works"}));

module.exports = router;