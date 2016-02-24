(function($){
    $.fn.hilight=function(options){
        var defaults={
            foreground:'red',
            background:'yellow'    
        };
        var opts = $.extend(defaults,options);
        $(this).css("background-color",opts.background);
        $(this).css("color",opts.foreground);
    };
})(jQuery);