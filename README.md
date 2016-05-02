# Progressive CSS & Asynchronous Scripts Loading Technics for HTTP/2
Repo contains the example code for testing progressive css and asynchronous javascript module loading technics for HTTP/2.

I used [Caddyserver](https://caddyserver.com/) to start a simple HTTP/2 server on my local machine. SSL Certificates aren't included.

To limit the speed of your internet connection use Apple's [Network Link Conditioner](http://www.thomashanning.com/network-link-conditioner/) (it's free).

## [1] Progressive CSS Loading
[Full Page Example of progressive CSS Loading](src/1/index.html)

## [2] Load Small Javascripts Modules asynchronous
[Full Page Example of asynchronous Javascript Modules](src/2/index.html)

## Resources
* [Link in Body](http://jakearchibald.com/2016/link-in-body/), Jake Archibald
* [Deep dive into the murky waters of script loading](http://www.html5rocks.com/en/tutorials/speed/script-loading/), Jake Archibald at HTML5Rocks
