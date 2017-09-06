var express = require("express");
var app = express();
var request = require("request");

//like the first example, call request
request({
	url: "https://blockchain.info/stats?format=json",
	json: true
}, function(error, response, body) {
	ubqPayouts = body.paymentsTotal;
});


app.get("/", function(req, res) {
	res.send("Ubq miner payouts! " + ubqPayouts + " hell yeah");
});

//say you wanna send a html file instead of a string, just change send to sendfile
/*app.get("/workers", function(req, res) {
	res.sendfile("index.html");
}); 

/*if you wanna do other endpoints, just keepadding these app functions :)..
app.get("/block", function(req, res) {
	res.send("Current bitcoin blockheight " + btcBlocks);
}); */



app.listen(8084, function(){
	console.log("go");
});
