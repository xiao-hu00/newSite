(function ( $ ) {
 
    $.fn.successPOP = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            text: "操作成功",
            backgroundColor: "green",
            color: '#fff',
            fontsize: '12px',
            margin:'300px auto 0',
            padding: '10px 20px',
            align:'center',
            minwidth:'100px',
            width:'auto'
        }, options );

        var _this = this;
        setTimeout(function(){
        	_this.fadeOut(500);
        },1000);
 		
 		
 		this.css({    
 			textAlign:settings.align,       
            color: settings.color,
            top: settings.top,
            margin:settings.margin,
            minWidth:settings.minwidth,
            width:settings.width
        }).fadeIn(500);

        this.find('span').text(settings.text).css({
 			padding:settings.padding,
 			backgroundColor: settings.backgroundColor,
 		});


        return this;
 
    };

    $.fn.errorPOP = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            text: "操作失败",
            backgroundColor: "red",
            color: '#fff',
            fontsize: '12px',
            margin:'300px auto 0',
            padding: '10px 20px',
            align:'center',
            minwidth:'100px',
            width:'auto'
        }, options );

        var _this = this;
        setTimeout(function(){
        	_this.fadeOut(500);
        },1000);
 
 		
 		this.css({            
 			textAlign:settings.align,
            color: settings.color,
            margin:settings.margin,                        
            minWidth:settings.minwidth,
            width:settings.width
        }).fadeIn(500);

        this.find('span').text(settings.text).css({ 			
 			padding:settings.padding,
 			backgroundColor: settings.backgroundColor,
 		});

        // Greenify the collection based on the settings variable.
        return this;
 
    };
 
}( jQuery ));