$(function () {
    // 顶部出表移入颜色变化
    // 1.发生的目标元素
    // 2.什么事件 mouseover,mouseout
    // 3.改变链接颜色
    $('.top a').mouseover(function () {
        $(this).css('color', '#fff');
    }).mouseout(function () {
        $(this).css('color', '#a4b094');
    });
    $('.shopCar').mouseover(function () {
        $(this).css({color: 'ff6740', background: '#fff'});
        $('.goods').stop(true, false).slideDown();
    }).mouseout(function () {
        $(this).css({color: 'a4b094', background: '#424242'});
        $('.goods').stop(true.false).slideUp();
    });

    // 表单的输入框效果
    $('.ser1').mouseover(function(){
        if(flag){
            $('.ser1 input').css('border','1px solid #000');
            $('.ser2').css('border','1px solid #000').css('borderLeft','none');
        }
    }).mouseout(function(){
        if(flag){
            $('.ser1 input').css('border','1px solid #ccc');
            $('.ser2').css('border','1px solid #ccc').css('borderLeft','none');
        }
    })

    // 热门搜索的移入效果
    $('.hot a').mouseover(function () {
        $(this).css({
            'color': '#fff',
            'background': 'orange'
        });
    }).mouseout(function () {
        $(this).css({
            'color': '#757575',
            'background': '#eee'
        });
    })

    // 按钮移入效果
    $('.ser2').mouseover(function(){
        if(flag){
            $('.ser1 input').css({
                'border':'1px solid #000',
                'border-right':'none'
            });
            $(this).css({
                'background':'orange',
                'color':'#fff',
                'border':'none'
            })
        }

    }).mouseout(function(){
        if(flag){
            $('.ser1 input').css('border','1px solid #ccc');
            $(this).css({
                'background':'#fff',
                'color':'#000',
                'border':'1px solid #ccc',
                'border-left':'none'
            })
        }
    })

    // 表单获取焦点的时候
    $('.ser1 input').focus(function() {
        $(this).css('border-color', 'orange');
        $('.ser2').css('border-color', 'orange');
        $('.keywordsList').slideDown().css('border-color', 'orange');
    }).blur(function () {
        $(this).css('border-color', '#ccc');
        $('.ser2').css('border-color', '#ccc');
        $('.keywordsList').slideUp().css('border-color', '#ccc');
    })

    // 下拉列表特效
    // finish 停止当前动画
    $('.nav li ').mouseover(function () {
        $(this).children('a').css('color', '#ff6700');
        if ($(this).index() < 7) {
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {
        $(this).children('a').css('color', '#000');
    });
    $('.nav').mouseout(function () {
        $('.select').slideUp();
    });
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish();
    }).mouseout(function () {
        $('.select').slideUp();
    });

    // 轮播图效果
    var num = 0;
    var timer;
    timer = setInterval(autoplay,5000);
    $('.round li').eq(0).css('background', 'orange');
    $('.round li').mouseover(function () {
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    });
    $('.banner').mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(autoplay, 5000);
    });
    $('.direcL').click(function () {
        //    上一张
        clearInterval(timer);
        num = num - 1;
        if (num < 0) {
            num = 4;
        }
        displayImg();
    });
    $('.direcR').click(function () {
        //    下一张
        clearInterval(timer);
        num = num + 1;
        if (num > 4) {
            num = 0;
        }
        displayImg();
    });
    function displayImg() {
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
        $('.round li').eq(num).css('background', 'orange').siblings().attr('style', '');
    }
    function autoplay (){
        num++;
        if (num > 4) {
            num = 0;
        }
        displayImg();
    }

    // 隐藏的导航
    $('.navL li').mouseover(function () {
        $(this).css('background', '#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {
        $(this).css('background', 'transparent');
    });

    // 鼠标移出二级导航的范围后，让它消失
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide');
    });

    // 鼠标移入三级导航的时候，也要让它显示
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background', '#ff6700');
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background', 'transparent');
    });
    /*************************************************************************/
    // star
    // 为star里的prev和next添加事件
    $('.star .prev').add($('.star .next')).click(function () {
        // 点击时改变另一个标签的样式
        $(this).siblings('div').css({color:'#000', border:'1px solid #000', cursor: 'pointer'});
        // 点击时改变本标签的样式
        $(this).css({color:'#ccc', border:'1px solid #ccc', cursor: 'default'});
        // 点击时改变两页列表的class【hide】
        ($(this).attr('class') == 'p next')
            ? ($('.one').addClass('hide') , $('.tow').removeClass('hide'))
            : ($('.one').removeClass('hide') , $('.tow').addClass('hide'))
    })

    // 推荐抖动效果
    $('.recommend .recommendList li').mouseover(function () {
        $(this).css('paddingTop','48px');
    }).mouseout(function () {
        $(this).css('paddingTop','50px');
    });
    // 列表切换
    var a = 0;
    var step = 0;
    $('.recommend .next').click(function () {
        // 向左移动list以显示下一页 判断避免a变为4
        (a < 3) ? (a ++, step = (a * 1226) + 'px', $('.recommend .recommendList').css('left' , '-' + step)) : 1;
        // 当a大于0时点亮prev标签
        (a > 0) ? $(this).siblings('div.p').css({color: '#000', border: '1px solid #000', cursor: 'pointer'}) : 1;
        // 当a大于2时熄灭next标签
        (a > 2) ? $(this).css({color:'#ccc', border:'1px solid #ccc', cursor:'default'}) : 1;
    });
    $('.recommend .prev').click(function () {
        // 向右移动list以显示上一页 判断避免a变为0
        (a > 0) ? (a --, step = (a * 1226) + 'px', $('.recommend .recommendList').css('left' , '-' + step)) : 1;
        // 当a小于3时点亮next标签
        (a < 3) ? $(this).siblings('div.p').css({color: '#000', border: '1px solid #000', cursor: 'pointer'}) : 1;
        // 当a小于1时熄灭prev标签
        (a < 1) ? $(this).css({color:'#ccc', border:'1px solid #ccc', cursor:'default'}) : 1;
    });

    // 内容
    // 定义一个数组储存4个值以用于4个box的轮播图计数
    var arr = [
        Num1 = 0,
        Num2 = 0,
        Num3 = 0,
        Num4 = 0,
    ];
    // 循环遍历4个box添加事件
    for (var i = 1 ; i < 5 ; i ++) {
        (function (i) {
            $('.box' + i).mouseover(function () {
                $(this).find('.prev').css('display', 'block');
                $(this).find('.next').css('display', 'block');
            }).mouseout(function () {
                $(this).find('.prev').css('display', 'none');
                $(this).find('.next').css('display', 'none');
            })
            $('.box' + i).find('.boxList p').click(function () {
                $(this).parent().find('ul li').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
                $(this).parent().find('.boxList p').eq($(this).index()).addClass('boxlistActive').siblings().removeClass('boxlistActive');
            });
            $('.box' + i).find('.next').click(function () {
                if (arr[i - 1] < 3) {
                    $(this).parent().find('ul li').eq(++ arr[i - 1]).removeClass('hide').siblings().addClass('hide');
                    $(this).parent().find('.boxList p').eq(arr[i - 1]).addClass('boxlistActive').siblings().removeClass('boxlistActive');
                }
            });
            $('.box' + i).find('.prev').click(function () {
                if (arr[i - 1] > 0) {
                    $(this).parent().find('ul li').eq(-- arr[i - 1]).removeClass('hide').siblings().addClass('hide')
                    $(this).parent().find('.boxList p').eq(arr[i - 1]).addClass('boxlistActive').siblings().removeClass('boxlistActive');
                }
            });
        })(i);
    }


    // 视频
    // 循环遍历4个img和对应的icon添加事件
    // 使其只有在鼠标进入图片时对应的icon才发生变化而不是进入li时
    for (var j = 0 ; j < 4 ; j ++) {
        (function (j) {
            $('.video .videoList img').eq(j).add($('.video .videoList div').eq(j)).mouseover(function () {
                $('.video .videoList .iconfont').eq(j).css('color', 'orange');
            }).mouseout(function () {
                $('.video .videoList .iconfont').eq(j).css('color', '#fff');
            })
        })(j);
    };

    // 搭配、配件、周边的切换
    $('.collocation , .parts , .derivative').each(function(index,element){
        $(element).find('.navList li').mouseover(function () {
            $(this).siblings().removeClass('navActive');
            $(this).addClass('navActive');
            $(element).find('.proR .proLi').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
        });
    })

    // 设置预置的【热门】active样式
    $('.collocation .navList li').eq(0)
        .add($('.parts .navList li').eq(0))
        .add($('.derivative .navList li').eq(0))
        .addClass('navActive');

    // 阴影效果
    $('.productYJ li')// 智能硬件右侧列表
        .add($('.proLi li'))// 搭配/配件右侧列表
        .add($('.productL li'))// 左侧所有列表
        .add($('.hotList li'))// 热评产品
        .add($('.videoList li'))// 视频内容
        .mouseover(function () {
        $(this).css({marginTop: '12px', marginBottom: '2px', boxShadow: '0 0 28px #aaa'});
    }).mouseout(function () {
        $(this).css({marginTop: '14px', marginBottom: '', boxShadow: 'none'});
    });

    // slideDown/slideUp动画效果
    // 循环遍历为slideDiv添加动画
    for (var b = 1 ; b < 14 ; b ++) {
        (function (b) {
            $('.proLi' + b).find('.proList1').mouseover(function () {
                $('.proLi' + b).find('.slideDiv').eq($(this).index()).stop().slideDown(250);
            }).mouseout(function () {
                $('.proLi' + b).find('.slideDiv').eq($(this).index()).stop().slideUp(250);
            });
        })(b);
    }
})

/****************************结束***************************/



// 测试合并next prev
// $('.recommend .next').add($('.recommend .prev')).click(function () {
//     ($(this).attr('class') == 'p next')
//         ? ((a < 3) ? ((a ++, step = (a * 1226) + 'px', $('.recommend .recommendList').css('left' , '-' + step))
//             , (a > 2) ? $(this).css({color:'#ccc', border:'1px solid #ccc', cursor:'default'}) : 1
//             , (a > 0) ? $(this).siblings('div.p').css({color: '#000', border: '1px solid #000', cursor: 'pointer'}) : 1) : 1)
//         : ((a > 0) ? (a --, step = (a * 1226) + 'px', $('.recommend .recommendList').css('left' , '-' + step)) : 1
//             , (a < 1) ? $(this).css({color:'#ccc', border:'1px solid #ccc', cursor:'default'}) : 1
//             , (a < 3) ? $(this).siblings('div.p').css({color: '#000', border: '1px solid #000', cursor: 'pointer'}) : 1);
//     console.log(a);
// });

// 测试box优化
// $('.box').each(function(i, item) {
//     $(item).mouseover(function() {
//         $(this).find('.prev').css('display', 'block');
//         $(this).find('.next').css('display', 'block');
//     }).mouseout(function() {
//         $(this).find('.prev').css('display', 'none');
//         $(this).find('.prev').css('display', 'none');
//     })
//     $(item).find('.boxList p').click(function () {
//         $(this).find('ul li').eq(i).removeClass('hide').siblings().addClass('hide');
//         $(this).find('ul li').eq(i).addClass('boxlistActive').siblings().removeClass('boxlistActive');
//     })
//     $(item).find('.next').click(function () {
//         console.log($(this).find('ul li'));
//         if (arr[i - 1] < 3) {
//             $('.box' + i + ' ul li').eq(++ arr[i - 1]).removeClass('hide').siblings().addClass('hide');
//             $('.box' + i + ' .boxList p').eq(arr[i - 1]).addClass('boxlistActive').siblings().removeClass('boxlistActive');
//         }
//         $(item).find('.prev').click(function () {
//             if (arr[i - 1] > 0) {
//                 $('.box' + i + ' ul li').eq(-- arr[i - 1]).removeClass('hide').siblings().addClass('hide')
//                 $('.box' + i + ' .boxList p').eq(arr[i - 1]).addClass('boxlistActive').siblings().removeClass('boxlistActive');
//             }
//         })
//     })


