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

$(function(){//操作DOM，内页左边的菜单图标
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

$(function(){//左边菜单点击
    var t = $('.left-nav > ul > li');
    var s = $('.left-nav > ul > li span');
    s.on("click",function(){
        var i = $(this).attr('data-src');
        $('.modify-article').hide();
        $('#'+i).show();        
    });
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
        }
    });
});





















