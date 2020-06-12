const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const fs = require('fs');
//models

 // rounter view shop
 router.get('/shop', /*ensureAuthentication*/ function(req, res){
    Product.find({},(err, products)=>{
        
        //var user = [users];
        if(err) throw err;
          //res.send(users);
        res.render('./shop/shop',{
          products:products,
          layout:"../layouts/layout"
        });
      });
});

// view single product
router.get('/product-details/:id', /*ensureAuthentication*/ function(req, res){
    Product.find({_id:req.params.id.slice(0,24)},(err, product)=>{
        
        //var user = [users];
        if(err) throw err;
          //res.send(users);
        res.render('./shop/single-product',{
          product:product,
          layout:"../layouts/layout"
        });
      });
});



  // shopping cart
  router.get("/shopping-cart", function(req, res, next) {
    if (!req.session.cart) {
      return res.render("./shop/shopping-cart", {
        products: null
      })
    }
    var cart = new Cart(req.session.cart)
    res.render("./shop/shopping-cart", {
      products: cart.generateArray(),
      totalPrice: cart.totalPrice,
      layout:"../layouts/layout"
    });
  });

 
  
// remove by one
  router.get("/remove/:id", function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
  
    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect("./shop/shopping-cart");
  });
module.exports = router