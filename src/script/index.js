//二级导航选择
! function () {
    $showview = $('.showview');
    $categoryli = $('.category_box ul li');
    $categoryli.on('mouseover', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).children().eq(1).show();
        $('.arrow-two').hide();
    })
    $categoryli.on('mouseout', function () {
        $(this).children().eq(1).hide();
        $('.arrow-two').show();
    })

}();

//购物车按钮点击
! function () {
    $('.head_nav_right_i').on('click', function () {
        window.location = 'http://localhost/project-360/src/html/shoppingcar.html';
    });
}();

//顶部悬浮
! function ($) {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 600) {
            $('.head_nav').stop(true).animate({
                top: 0
            });
        }
    });
    //回到顶部
    $('.totop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

}(jQuery);

//轮播
var i = 0;
var timer;
! function ($) {
    const $imgs = $('.banner a');
    const $btns = $('#banner ol li');
    showTime();
    $imgs.eq(0).show().siblings('a').hide();

    $btns.on('click', function () {
        i = $(this).index();
        Show();

    });

    Show();

    $('.a-left').on('click', function () {
        clearInterval(timer);
        if (i == 0) {
            i = 6;
        }
        i--;
        Show();
        showTime();
    });

    $('.a-right').on('click', function () {
        clearInterval(timer);
        if (i == 5) {
            i = -1;
        }
        i++;
        Show();
        showTime();
    });

    function Show() {
        $imgs.eq(i).fadeIn(300).siblings('a').fadeOut(300);
        $btns.eq(i).addClass('active').siblings('li').removeClass('active');
    }

    function showTime() {
        timer = setInterval(function () {
            Show();
            i++;
            if (i == 6) {
                i = -1;
            }
        }, 2000);
    }

}(jQuery);

//楼梯
! function ($) {
    const $lc = $('.louti');
    const $aside = $('.aside ul');
    const $asidelis = $('.aside ul li');


    function scroll() {


        let $top = $(window).scrollTop();
        $top >= 700 ? $aside.show() : $aside.hide();
        $lc.each(function (index, ele) {
            let $lctop = $lc.eq(index).offset().top + $(ele).height() / 2;
            if ($lctop > $top) {
                $asidelis.removeClass('active');
                $asidelis.eq(index).addClass('active');
                return false;
            }
        });

    }
    scroll();

    $(window).on('scroll', function () {
        scroll();
    });

    $asidelis.on('click', function () {
        $(window).off('scroll');
        $(this).addClass('active').siblings('li').removeClass('active');
        $('html,body').stop(true).animate({
            scrollTop: $lc.eq($(this).index()).offset().top
        }, function () {
            $(window).on('scroll', function () {
                scroll();
            });
        });
    });

}(jQuery);