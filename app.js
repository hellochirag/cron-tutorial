// Dependencies
var express = require('express');
var CronJob = require('cron').CronJob;

// App definition
var app = express();

var portNum = 3000;
app.listen(3000, function () {
    console.log('Making some pancakes on port:', portNum);
});



var CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');