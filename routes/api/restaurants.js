const express = require('express');
const router = express.Router();
const restaurantCtrl = require('../../controllers/api/restaurants');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/create', ensureLoggedIn, restaurantCtrl.createRestaurant);
router.get('/',restaurantCtrl.index);
router.get('/:id', ensureLoggedIn, restaurantCtrl.detail);
router.delete('/:id', ensureLoggedIn, restaurantCtrl.deleteOne);
router.put('/:id', ensureLoggedIn, restaurantCtrl.updateOne);

module.exports = router;