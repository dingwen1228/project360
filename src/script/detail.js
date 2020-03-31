//渲染
! function ($) {

    let $sid = location.search.substring(1).split('=')[1];
    if (!$sid) {
        $sid = 1;
    }
    const $smallimg = $('.smallimg img');
    const $bigimg = $('.bigimg');
    const $title = $('.sInfo-title');
    const $price = $('.nowprice');
    $.ajax({
        url: 'http://localhost/project-360/php/detail.php',
        data: {
            sid: $sid
        },
        dataType: 'json'
    }).done(function (d) {
        $smallimg.attr('src', d.picurl);
        $smallimg.attr('sid', d.sid);
        $bigimg.attr('src', d.picurl);

        $title.html(d.title);
        $price.html(d.price);

        let $picarr = d.pics.split(',');
        let $strhtml = '';
        let $num = 0;
        $.each($picarr, function (index, value) {
            $strhtml += `
            <li>
                <img src="${value}">
            </li>
            `
            $num++;
        });

        if ($num > 5) {
            $('.arrow-right').css({
                'color': 'black',
                'border': '1px solid #ccc'
            });
        }

        $('.list ul').html($strhtml);

    });

}(jQuery);
//放大镜
! function ($) {
    const $smalldiv = $('.smallimg');
    const $smallimg = $('.smallimg img');
    const $sf = $('.sf');
    const $bf = $('.bf');
    const $bigimg = $('.bigimg');
    const $left = $('.arrow-left');
    const $right = $('.arrow-right');

    $sf.width($smallimg.width() * $bf.width() / $bigimg.width());
    $sf.height($smallimg.height() * $bf.height() / $bigimg.height());

    let $bili = $bigimg.width() / $smallimg.width();

    $smalldiv.hover(
        function () {
            $sf.css('visibility', 'visible');
            $bf.css('visibility', 'visible');
            $(this).on('mousemove', function (e) {
                let $left = e.pageX - $('.picbox').offset().left - $sf.width() / 2;
                let $top = e.pageY - $('.picbox').offset().top - $sf.height() / 2;
                if ($left < 0) {
                    $left = 0;
                } else if ($left > $smallimg.width() - $sf.width()) {
                    $left = $smallimg.width() - $sf.width()
                }
                if ($top < 0) {
                    $top = 0;
                } else if ($top > $smallimg.height() - $sf.height()) {
                    $top = $smallimg.height() - $sf.height()
                }
                $sf.css({
                    left: $left,
                    top: $top
                });
                $bigimg.css({
                    left: -$left * $bili,
                    top: -$top * $bili
                });
            });
        },
        function () {
            $sf.css('visibility', 'hidden');
            $bf.css('visibility', 'hidden');
        }
    );
    //切换
    $('.list ul').on('click', 'li', function () {
        let $imgurl = $(this).find('img').attr('src');
        $smallimg.attr('src', $imgurl);
        $bigimg.attr('src', $imgurl);
    });
    //左右箭头
    let $num = 5;
    $right.on('click', function () {
        let $list = $('.list ul li');
        if ($list.size() > $num) {
            $num++;
            $left.css({
                'color': '#333',
                'border': '1px solid #ccc'
            });
            $('.list ul').animate({
                left: -($num - 5) * $list.eq(0).outerWidth(true)
            })
        }
    });

    $left.on('click', function () {
        let $list = $('.list ul li');
        if ($num > 6) {
            $num--;
            $left.css({
                'color': '#333',
                'border': "1px solid #ccc;"
            });
            $('.list ul').animate({
                left: -($num - 5) * $list.eq(0).outerWidth(true)
            })
        }
    });

}(jQuery);
//cookie
! function ($) {
    let arrsid = [];
    let arrnum = [];

    function cookietoarray() {
        if (jscookie.get('cookiesid') && jscookie.get('cookienum')) {
            arrsid = jscookie.get('cookiesid').split(',');
            arrnum = jscookie.get('cookienum').split(',');
        } else {
            arrsid = [];
            arrnum = [];
        }
    }
    const $cart = $('.js-cart');
    $cart.on('click', function () {
        let $sid = $(this).parents('.main').find('.smallimg img').attr('sid');

        cookietoarray();

        if ($.inArray($sid, arrsid) != -1) {
            let $num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('.goodsCount').val()); //取值
            arrnum[$.inArray($sid, arrsid)] = $num; //赋值
            jscookie.add('cookienum', arrnum, 10);
            console.log($sid);
        } else {
            console.log($sid);

            arrsid.push($sid);
            jscookie.add('cookiesid', arrsid, 10);
            arrnum.push($('.goodsCount').val());
            jscookie.add('cookienum', arrnum, 10);
        }
    })

}(jQuery);
//按钮功能
! function ($) {
    $('.head_nav_right_i').on('click', function () {
        //location.href = 'http://localhost/project-360/src/html/cart.html';
        $(location).attr('href', 'http://localhost/project-360/src/html/shoppingcar.html');
    });
    $('.decrement').on('click', function () {
        $num = $(this).parents('.gcIpt').find('.goodsCount').val();
        $num <= 1 ? $num = 1 : $num--;
        $(this).parents('.gcIpt').find('.goodsCount').val($num);

    });
    $('.increment').on('click', function () {
        $num = $(this).parents('.gcIpt').find('.goodsCount').val();
        $num < 1 ? $num = 1 : $num++;
        $(this).parents('.gcIpt').find('.goodsCount').val($num);
    });

}(jQuery);