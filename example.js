var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
  pageSettings: {
	loadImages: false,
	loadPlugins: false,
//	userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31'
	userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'
	}
});

//var casper = require('casper').create();
var x = require('casper').selectXPath;
var firstUrl;
casper.start('http://spu.taobao.com/spu/3c/detail.htm?&cat=1512&spuid=229361412');

casper.then(function() {
	firstUrl = this.getCurrentUrl();
});
casper.then(function(){
	this.click(x('//*[@id="J_ListContent"]/ul/li[1]/h3/a'));
    console.log("Woop!");
});

casper.waitFor(function check() {
	return this.getCurrentUrl() != firstUrl;
}, function then() {
	console.log(this.getCurrentUrl());
},function(){
	console.log("Time out!")
},10000);


casper.run();
