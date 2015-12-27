(function() {
    'use strict';
    $('.btn-reload').click(function(){
        $('.main_info').html('');
        $('.main_info').hide(200);
        $.ajax({
            url: "/instance_introspection/reload",
        }).done(function(html, el) {
            $('.repositories').html(html);
            $.ajax({
                url: "/instance_introspection/main_info",
            }).done(function(html, el) {
                $('.main_info').html(html);
                $('.main_info').show(500);
            });
        });
    });
    $('.btn-reload').click();
    $('#accordion').on('shown.bs.collapse', function () {
          var panel = $(this).find('.in');
          $('html, body').animate({
                      scrollTop: panel.offset().top
          }, 500);
    });
    $('#accordion').on('show hide', function() {
            $(this).css('height', 'auto');
    });
})();
