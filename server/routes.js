const express = require('express');
const helper = require('./helperFunctions');
// Note: define the router
let router = express.Router();

router.route('/register').post((req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: {},
  });
})

router.route('/login').post((req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: {},
  });
})

router.route('/feed').get((req, res) => {
  // call getNews helper function to get data from API
  console.log("run");
  helper.getNewsFromApi((err, data) => {
    if (!err) {
      res.send({
        success: true,
        data: data,
      });
    } else {
      res.send({
        success: false,
        data: {},
      });
    }
  })

})

//https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1355006627464de1bea55e1cd7420d1c







module.exports = router;
