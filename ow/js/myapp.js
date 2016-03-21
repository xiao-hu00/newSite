$(function(){//顶部头像 滑过后效果等
    var w = $('.header-info').find('ul').outerHeight();
	$('.personal-header').hover(function(){
        $('.header-info').stop().animate({'height':w},300);
        $('.tiangle').fadeIn(100);
    },function(){
        $('.header-info').stop().animate({'height':0},300);   
        $('.tiangle').fadeOut(300); 
    });
    var t = $('.header-info > ul > li');
    var line = $('.header-info > p');
    var top = t.parent().find('.act').index()*28+10;
    line.css('top',top);
    t.on('click',function(){
        $(this).addClass('act').siblings().removeClass('act');
    });
    t.find('a').hover(function(){
        line.stop().animate({'top':$(this).parent().index()*28+10},300);        
        $('.header-info > ul > .act > a').css({'color':'#666'});
    },function(){
        line.stop().animate({'top':t.parent().find('.act').index()*28+10},300);        
        $('.header-info > ul > .act > a').css({'color':'#63ce83'});
    })
});

//新－个人主页
$(function(){
    var t = $('.new-personal-head > ul > li');    
    var width = t.find('.act').width();
    var line = $('.new-line');
    if(!!t){
        line.css({'width':width}).css({'left':t.parent().find('.act').position().left+15});
        t.on('click',function(){
            $(this).addClass('act').siblings().removeClass('act');
            $('.new-hot-con > ul').eq($(this).index()).addClass('act').siblings().removeClass('act');
        });
        t.hover(function(){
            line.stop().animate({'left':$(this).position().left+15},300);  
            $('.header-info > ul > .act > a').css({'color':'#666'});
        },function(){
            line.stop().animate({'left':t.parent().find('.act').position().left+15},300);        
            $('.header-info > ul > .act > a').css({'color':'#63ce83'});
        })
    }

});

$(function(){//顶部导航
    var i = $('.nav > i');    
    var t = $('.nav > li > a');
    var act = $('.nav > .act');
    if(i.length < 1)return;
    i.css('width',t.width()+10);
    i.css({'left':act.position().left+10,'width':act.find('a').width()+10});
    t.hover(function(){
        i.stop().animate({'left':$(this).parent().position().left+10,'width':$(this).width()+10},300);
        act.find('a').css({'color':'#777'});
    },function(){
        i.stop().animate({'left':act.position().left+10,'width':act.find('a').width()+10},300);
        act.find('a').css({'color':'#63ce83'});
    });
});

$(function(){//操作文本域的，评论
    var t = $('.comments-text');
    t.focus(function(){
        if(t.val() == "你怎么看？")
        t.val('');
    }).blur(function(){
        if(t.val() == "") {
            t.val('你怎么看？');
        };
    });
});

$(function(){//操作DOM，内页左边的菜单图标  个人设置页面
	var t = $('.left-nav ul > li > span'),d = $('.nav-title-tip');
	t.hover(function(){		
		var i = $(this).parent().index()+1;
		d.stop().animate({opacity:"1"},400);
		d.find('i').text($(this).attr('data-text'));
		d.css('top',$(this).parent().index()*60+70);
		t.eq(i-1).css('background','url(images/'+i+i+'.png) center center no-repeat #222224');
	},function(){
		var i = $(this).parent().index()+1;
		t.eq(i-1).css('background','url(images/'+i+'.png) center center no-repeat #30333a');
		d.stop().animate({opacity:"0"},100);
	});
    t.on('click',function(){//左侧菜单点击，加载相应的html页面
        var m = $(this).attr('data-src');
        console.log('./'+m+'.html');
        $('#'+m).load('./'+m+'.html');
    });
});

$(function(){//左边菜单点击   个人设置页面
    var t = $('.left-nav > ul > li');
    var s = $('.left-nav > ul > li span');
    s.on("click",function(){
        var i = $(this).attr('data-src');
        $('.modify-article').hide();
        $('#'+i).show();        
    });
});

$(function(){//操作DOM，交流页面2 中间部分导航效果
    var t = $('.exchange-head > ul > li > a');
    var lf = $('.exchange-head > ul > li.act').width()/2 - 6;
    if(!!t){
        t.next().css('margin-left',lf);
    }
    t.on("click",function(){
        var li = $(this).parent('li');
        li.addClass("act").siblings().removeClass("act");
        li.find('span').css('margin-left',li.width()/2 - 6);
    });

    //右边tab切换
    var tt = $('.list-info > .unit-c > ul > li');
    var line = $('.list-info > .unit-c > .line');
    var width = tt.find('span').width();
    line.width(width);
    if(line.length > 0){
        line.css('left',tt.first().find('span').position().left);
    }
    tt.on('mouseover',function(){
        var left = $(this).find('span').position().left;
        $(this).addClass('act').siblings().removeClass('act');
        $('.list-info > .unit-d').eq($(this).index()).addClass('act').siblings().removeClass('act');
        line.stop().animate({'left':left},150);
    });
});

$(function(){//操作DOM 个人终极，点击回复
	var t = $('.my-message .c > .d');
	t.on('click',function(){
		var _this = $(this);
		if(_this.hasClass('act')){
			t.removeClass('act');
			t.parent().next().hide();
		}
		else{
			t.removeClass('act');
			t.parent().next().hide();
			_this.parent().next().show();
			_this.addClass('act');
		}
		
	})
});

$(function(){//点击添加 删除 一个项目经验
	var t = $('.project-info');
	var html = $('.one-project');
	$('.addjingyan').on('click',function(){
		t.append('<div class="one-project">'+html.html()+'</div>');
		$('.one-project').last().find('.subtitle').append('<b></b>');
	});
	$('.project-info').on('click','b',function(e){
		$(this).parent().parent().remove();
	});
});

$(function(){//操作文本域的，发送站内信
	var t = $('.m-message');
	t.focus(function(){
		if(t.val() == "消息内容")
		t.val('');
	}).blur(function(){
		if(t.val() == "") {
			t.val('消息内容');
		};
	});
});

$(function(){//认证用户列表相关js
    var t = $('.user-list-one > div').parent().height();
    if($(window).width()>768){
        $('.user-list-one > div').height(t);
    }
    else{
        $('.user-list-one > div > div').css('position','static');
    }
    
    var p = $('.user-nav-con > p');
    p.on('click',function(){
        var i = $(this).parent().index();
        $(this).next().find('ul').slideToggle(200);
    });
});

$(function(){//新－个人中心 右边菜单滑动事件
    var t = $('.my-set-center > ul > li');
    var line = $('.my-set-center > span');
    var i = t.parent().find('.act').index();
    line.css('top',i*42);
    t.hover(function(){
        line.stop().animate({'top':$(this).index()*42},200);
    },function(){        
        line.stop().animate({'top':i*42},200);
    });
    
});

$(function(){//横幅提示信息
    var time = $('.banner-text').attr('data-time');
    if(!!time && time < 100000){
        $('.banner-text').stop().animate({'height':50},300);
        setTimeout(function(){
            $('.banner-text').stop().animate({'height':0},300);
        },time)
    }
    if(time == 100000 || time > 100000){
        $('.banner-text').css('background','#ff5350');
        $('.banner-text').stop().animate({'height':50},300);     
        $('.banner-text > p > span').css('cursor','pointer').on('click',function(){
            $('.banner-text').stop().animate({'height':0},300);
        });
    }
});

//上传头像
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}
(function ($) {
    var cropbox = function(options, el){
        var el = el || $(options.imageBox),
            obj =
            {
                state : {},
                ratio : 1,
                options : options,
                imageBox : el,
                thumbBox : el.find(options.thumbBox),
                spinner : el.find(options.spinner),
                image : new Image(),
                getDataURL: function ()
                {
                    var width = this.thumbBox.width(),
                        height = this.thumbBox.height(),
                        canvas = document.createElement("canvas"),
                        dim = el.css('background-position').split(' '),
                        size = el.css('background-size').split(' '),
                        dx = parseInt(dim[0]) - el.width()/2 + width/2,
                        dy = parseInt(dim[1]) - el.height()/2 + height/2,
                        dw = parseInt(size[0]),
                        dh = parseInt(size[1]),
                        sh = parseInt(this.image.height),
                        sw = parseInt(this.image.width);

                    canvas.width = width;
                    canvas.height = height;
                    var context = canvas.getContext("2d");
                    context.drawImage(this.image, 0, 0, sw, sh, dx, dy, dw, dh);
                    var imageData = canvas.toDataURL('image/png');
                    return imageData;
                },
                getBlob: function()
                {
                    var imageData = this.getDataURL();
                    var b64 = imageData.replace('data:image/png;base64,','');
                    var binary = atob(b64);
                    var array = [];
                    for (var i = 0; i < binary.length; i++) {
                        array.push(binary.charCodeAt(i));
                    }
                    return  new Blob([new Uint8Array(array)], {type: 'image/png'});
                },
                zoomIn: function ()
                {
                    this.ratio*=1.1;
                    setBackground();
                },
                zoomOut: function ()
                {
                    this.ratio*=0.9;
                    setBackground();
                }
            },
            setBackground = function()
            {
                var w =  parseInt(obj.image.width)*obj.ratio;
                var h =  parseInt(obj.image.height)*obj.ratio;

                var pw = (el.width() - w) / 2;
                var ph = (el.height() - h) / 2;

                el.css({
                    'background-image': 'url(' + obj.image.src + ')',
                    'background-size': w +'px ' + h + 'px',
                    'background-position': pw + 'px ' + ph + 'px',
                    'background-repeat': 'no-repeat'});
            },
            imgMouseDown = function(e)
            {
                e.stopImmediatePropagation();

                obj.state.dragable = true;
                obj.state.mouseX = e.clientX;
                obj.state.mouseY = e.clientY;
            },
            imgMouseMove = function(e)
            {
                e.stopImmediatePropagation();

                if (obj.state.dragable)
                {
                    var x = e.clientX - obj.state.mouseX;
                    var y = e.clientY - obj.state.mouseY;

                    var bg = el.css('background-position').split(' ');

                    var bgX = x + parseInt(bg[0]);
                    var bgY = y + parseInt(bg[1]);

                    el.css('background-position', bgX +'px ' + bgY + 'px');

                    obj.state.mouseX = e.clientX;
                    obj.state.mouseY = e.clientY;
                }
            },
            imgMouseUp = function(e)
            {
                e.stopImmediatePropagation();
                obj.state.dragable = false;
            },
            //鼠标滚轮放大缩小图片
            zoomImage = function(e)
            {
                // e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio*=1.1 : obj.ratio*=0.9;
                // setBackground();
            }

        obj.spinner.show();
        obj.image.onload = function() {
            obj.spinner.hide();
            setBackground();

            el.bind('mousedown', imgMouseDown);
            el.bind('mousemove', imgMouseMove);
            $(window).bind('mouseup', imgMouseUp);
            el.bind('mousewheel DOMMouseScroll', zoomImage);
        };
        obj.image.src = options.imgSrc;
        el.on('remove', function(){$(window).unbind('mouseup', imgMouseUp)});

        return obj;
    };

    jQuery.fn.cropbox = function(options){
        return new cropbox(options, this);
    };
}));

//上传头像

$(function() {
	if($('.content').length != 1)return;
    $('.content').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            uploadImg: {
                message: '请上传头像图片',
                validators: {
                    notEmpty: {
                        //message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        //min: 6,
                        //max: 30,
                        //message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        //regexp: /^[a-zA-Z0-9_]+$/,
                        //message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                    emailAddress: {
                        message: '请输入正确的邮箱地址'
                    }
                }
            },
            qqnumber: {
                validators: {
                    notEmpty: {
                        message: 'QQ不能为空'
                    },
                    stringLength: {
                        min: 6,
                        //max: 30,
                        message: 'QQ位数必须大于6位'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/,
                        message: 'QQ必须是数字'
                    }
                }
            },
            summery: {
            	message: '请上传头像图片',
                validators: {
                    notEmpty: {
                        message: '个人简介不能为空'
                    }
                }
            },
            experience: {
                validators: {
                    notEmpty: {
                        message: '技术经验不能为空'
                    }
                }
            },
            xiangmumingchegn: {
                validators: {
                    notEmpty: {
                        message: '项目名称不能为空'
                    }
                }
            },
            danrenzhiwu: {
                validators: {
                    notEmpty: {
                        message: '担任职务不能为空'
                    }
                }
            },
            zhanshi: {
                validators: {
                    notEmpty: {
                        message: '展示链接不能为空'
                    }
                }
            },
            xiangmujingli: {
                validators: {
                    notEmpty: {
                        message: '项目经历不能为空'
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: '性别选择不能为空'
                    }
                }
            },
            type: {
                validators: {
                    notEmpty: {
                        message: '远程类型选择不能为空'
                    }
                }
            },
            profession: {
                validators: {
                    notEmpty: {
                        message: '远程类型选择不能为空'
                    }
                }
            },
            starttime: {
                validators: {
                    notEmpty: {
                        message: '开始时间选择不能为空'
                    }
                }
            },
            endtime: {
                validators: {
                    notEmpty: {
                        message: '结束时间选择不能为空'
                    }
                }
            },
            sheng: {
                validators: {
                    notEmpty: {
                        message: '省选择不能为空'
                    }
                }
            },
            shi: {
                validators: {
                    notEmpty: {
                        message: '市选择不能为空'
                    }
                }
            },
            diqu: {
                validators: {
                    notEmpty: {
                        message: '地区选择不能为空'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '新密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        //max: 30,
                        message: '密码位数必须大于6位'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: '两次密码输入不一致'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: '确认密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        //max: 30,
                        message: '密码位数必须大于6位'
                    },
                    identical: {
                        field: 'password',
                        message: '两次密码输入不一致'
                    }
                }
            },
            old_pwd:{
                validators: {
                    notEmpty: {
                        message: '旧密码不能为空'
                    }
                }
            },
        }
    });
});





















