/**
 * jquery.simplr.smoothscroll
 * version 1.0.1
 * copyright (c) 2012 https://github.com/simov/simplr-smoothscroll
 * licensed under MIT
 * requires jquery.mousewheel - https://github.com/jquery/jquery-mousewheel
 */

;(function ($) {
  'use strict'
  
  $.srSmoothscroll = function (options) {
  
    // defaults
    var self = $.extend({
      step: 55,
      speed: 400,
      ease: 'swing',
      target: $('body'),
      container: $(window)
    }, options || {})

    // private fields & init
    var container = self.container
      , top = 0
      , step = self.step
      , viewport = container.height()
      , wheel = false

    var target = (self.target.selector == 'body')
      ? ((navigator.userAgent.indexOf('AppleWebKit') !== -1) ? self.target : $('html'))
      : container

    // events
    self.target.mousewheel(function (event, delta) {

      wheel = true

      if (delta < 0) // down
        top = (top+viewport) >= self.target.outerHeight(true) ? top : top+=step

      else // up
        top = top <= 0 ? 0 : top-=step

      target.stop().animate({scrollTop: top}, self.speed, self.ease, function () {
        wheel = false
      })

      return false
    })

    container
      .on('resize', function (e) {
        viewport = container.height()
      })
      .on('scroll', function (e) {
        if (!wheel)
          top = container.scrollTop()
      })
  
  }
})(jQuery);
