(function($) {
    $(window).load(function () {
        // retrieved this line of code from http://dimsemenov.com/plugins/magnific-popup/documentation.html#api
        $.magnificPopup.open({
            items: {
                src: '.tudia-modal'
            },
            type: 'inline'

          // You may add options here, they're exactly the same as for $.fn.magnificPopup call
          // Note that some settings that rely on click event (like disableOn or midClick) will not work here
        }, 0);
    });
})(jQuery);

/*(function($) {
    $(window).load(function () {
setTimeout(function() {
 if ($('.tudia-modal').length) {
   $.magnificPopup.open({
    items: {
        src: '.tudia-modal'
    },
    type: 'inline'
      });
   }
 }, 5000);
});*/