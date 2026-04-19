const express = require('express');
const cartController = require('../services/cart.service');
const router = express.Router();

const { verifyAccessToken } = require('../middlewares/jwt-verify')

router.route('/')
    .get(verifyAccessToken, cartController.getCartByUser)
    .post(cartController.addToCart)
    .put(cartController.updateQuantity)

router.route('/deleted')
    .put(cartController.deleteProduct)

module.exports = router;
