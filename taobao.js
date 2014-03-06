var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
  pageSettings: {
	loadImages: false,
	loadPlugins: false,
	userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'
  }
});

casper.start('http://click.simba.taobao.com/cc_im?spm=1020.3.9.1.KcXchL&p=&s=821915993&k=333&e=qr+i47bf1vgM2ibgTK6EkvTWuMkywOA9QYBZUYAHwJgi6JvpGBlfWZwdyijgREyxLqDApLe+GC3AVOJOtbCzEQlOVlpr7ZU4Xksp0hcMRnEMMuUJYGCxuYBAwlKHwdpH9xmnWu4l2rkHVcePDsqYwbwI6bea14q0O6IbpfK1XtnwMaNohqTJfQZN6NwmLQl221vQmAtt+YFYbHjUaJGLVjXHCAQQ+L9HzT4cjoVD7ydOTgYMdMe912EYL+BVFUSbrez9SSZIio5Pc81PTS+TqZv3a3zFiMhHNUSSrk8PlKGT+h8w0UB9lDZdoRwfgEZDymD3vLvYtpw=', function() {
	this.echo(this.getTitle());
});
/*casper.then(function(){*/
	//this.echo(this.getTitle());
/*})*/
//casper.start('http://www.hao123.com', function() {
    //this.echo(this.getTitle());
//});

casper.run();
