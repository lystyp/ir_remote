var express = require('express');
const request = require('request');
var url = require("url"); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var parseUrl = url.parse(req.url);
  var query = parseUrl.query;
  console.log("url = ")
  console.log(parseUrl)
  if(query == "action=stream"){
    const url = 'http://172.20.10.2:8080/?action=stream';
    request.get(url).pipe(res);
  } else {
    res.render('index', { title: 'Test~' });
  }
});



module.exports = router;
