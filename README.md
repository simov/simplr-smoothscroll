
# simplr-smoothscroll


## [DEMO](http://simov.github.io/simplr-smoothscroll/examples)


## Requirements

[jquery-mousewheel](https://github.com/jquery/jquery-mousewheel)


## Usage

```js
$(function () {
  $.srSmoothscroll({
    // defaults
    step: 55,
    speed: 400,
    ease: 'swing',
    target: $('body'),
    container: $(window)
  })
})
```


## Enable scrolling for specific widgets

See this [example](http://simov.github.io/simplr-smoothscroll/examples/example-02.html)

```html
<div id="container1">
  <div id="widget1">
    <p>lorem ipsum</p>
  </div>
</div>
<div id="container2">
  <div id="widget2">
    <p>lorem ipsum</p>
  </div>
</div>
```

```css
#container1 { width: 500px; height: 300px; overflow: auto; }
#container2 { width: 500px; height: 300px; overflow: auto; }
```

```js
$(function () {
  $.srSmoothscroll({
    target: $('#widget1'),
    container: $('#container1')
  })
  $.srSmoothscroll({
    target: $('#widget2'),
    container: $('#container2')
  })
})
```


## Browser and os detection

Browsers that support *smooth* scrolling natively may be excluded.

```js
$(function () {
  var platform = navigator.platform.toLowerCase();
  if (platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) {
    if ($.browser.webkit) {
      $.srSmoothscroll();
    }
  }
});
```

This will enable *simplr-smoothscroll* only for webkit browsers on windows and linux.
