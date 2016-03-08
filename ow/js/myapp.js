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

$(function(){//顶部导航
    var i = $('.nav > i');    
    var t = $('.nav > li > a');
    var act = $('.nav > .act');
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
    if(!!$('.banner-text').attr('data-time')){
        $('.banner-text').stop().animate({'height':50},300);
        var time = $('.banner-text').attr('data-time');
        setTimeout(function(){
            $('.banner-text').stop().animate({'height':0},300);
        },time)
    }
});


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





















