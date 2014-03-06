//http://item.taobao.com/item.htm?id=20098897075##deal-record
//  //*[@id="J_TabBar"]/li[3]/a/em]
var utils = require('utils')
var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
  pageSettings: {
    loadImages: false,
    loadPlugins: false,
    userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'
  }
  //clientScripts: ['lib/jquery.min.js'] // Inject jquery library, allows use of $ variables
});


casper.start('http://item.taobao.com/item.htm?id=20098897075',function(){
		console.log(this.getTitle());
		}
);
//As a reminder, think of the evaluate() method as a gate between the CasperJS environment and the one of the page you have opened; everytime you pass a closure to evaluate(), you’re entering the page and execute code as if you were using the browser console.
  //links = this.evaluate(getTownLinks);

/*casper.then(function(){*/
  //var turnover = this.evaluate(function(){ 
		////return __utils__.getElementByXPath('//*[@id="J_TabBar"]/li[3]/a/em');
		//return __utils__.getElementByXPath('//*[@id="J_TabBar"]/li[1]/a');
  //});
  //utils.dump(turnover);
//});

casper.run();
