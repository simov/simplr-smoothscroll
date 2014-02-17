#simplr-smoothscroll

##[DEMO](http://simov.github.io/simplr-smoothscroll/examples/demo1.html)

##Requirements
[jquery-mousewheel](https://github.com/brandonaaron/jquery-mousewheel/)

##Usage
```js
$(function () {
	$.srSmoothscroll();
});
```

##Browser and os detection
Browsers that support *smooth* scrolling natively may be excluded.
```js
$(function () {
	var platform = navigator.platform.toLowerCase();
	if (platform.indexOf('windows') != -1 || platform.indexOf('linux') != -1) {
		if ($.browser.webkit) {
			$.srSmoothscroll();
		}
	}
});
```
This will enable *simplr-smoothscroll* only for webkit browsers on windows and linux.
