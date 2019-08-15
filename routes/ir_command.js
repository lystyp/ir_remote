var express = require('express');
var router = express.Router();
var lircNode = require('lirc_node');
var exec = require('child_process').exec;


router.get('/on', function(req, res, next) {
  // lircNode.irsend.send_once("kolin", "on", function (err, stdout, stderr) {
  //   console.log("Turn on command.");
  //   res.writeHead(200, {"Content-Type": "text/plain"});
  //   res.write("Turn on finish");
  //   res.end();
  // });
  
  exec('irsend SEND_ONCE kolin \"on\"', function(error, stdout, stderr){
    console.log("send command on,");
    console.log("error = " + error);
    console.log("stdout = " + stdout);
    console.log("stderr = " + stderr);
    if (error == null){
      res.render('index', { title: 'Has Turned on~' });
    } else {
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write(JSON.stringify(error));
      res.end();
    }
  });

});

router.get('/off', function(req, res, next) {
  // lircNode.irsend.send_once("kolin", "off", function (err, stdout, stderr) {
  //   console.log("Turn off command.");
  //   res.writeHead(200, {"Content-Type": "text/plain"});
  //   res.write("Turn off finish");
  //   res.end();
  // });
  exec('irsend SEND_ONCE kolin \"off\"', function(error, stdout, stderr){
    console.log("send command off,");
    console.log("error = " + error);
    console.log("stdout = " + stdout);
    console.log("stderr = " + stderr);
    if (error == null){
      res.render('index', { title: 'Has Turned off~' });
    } else {
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write(JSON.stringify(error));
      res.end();
    }
  });
});

router.get('/timer', function(req, res, next) {
  // lircNode.irsend.send_once("kolin", "timer", function (err, stdout, stderr) {
  //   console.log("Timer command.");
  //   res.writeHead(200, {"Content-Type": "text/plain"});
  //   res.write("Set timer finish");
  //   res.end();
  // });
  exec('irsend SEND_ONCE kolin \"timer\"', function(error, stdout, stderr){
    console.log("send command timer,");
    console.log("error = " + error);
    console.log("stdout = " + stdout);
    console.log("stderr = " + stderr);
    if (error == null){
      res.render('index', { title: 'Has set timer~' });
    } else {
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write(JSON.stringify(error));
      res.end();
    }
  });
});

module.exports = router;
