(function(){
  var userAgent = window.navigator.userAgent.toLowerCase();

  var device_type = 'desktop';
  if(userAgent.indexOf('ipad') > 0 ||
     userAgent.indexOf('iphone') > 0 ||
     userAgent.indexOf('ipod') > 0 ||
     userAgent.indexOf('android') > 0) {
     var win = $(window);
     if (win.width() > win.height()) {
         device_type = 'tablet';
     } else {
         device_type = 'phone';
     }
  }
})();


