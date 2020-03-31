! function ($) {

    let array_default = []; //排序前的li数组
    let array = []; //排序中的数组
    let prev = null;
    let next = null;

    const $list = $('.list');
    $.ajax({
        url: 'http://localhost/project-360/php/listdata.php',
        dataType: 'json',
    }).done(function (d) {
        let $strhtml = '';
        $.each(d, function (index, value) {
            $strhtml += `
         <li class="list-item">
        <dl class="desc">
            <dt class="pic">
                <a href="http://localhost/project-360/src/html/detail?sid=${value.sid}">
                    <img src="${value.picurl}"
                        alt="${value.title}">
                </a>
            </dt>
            <dd class="cont">
                <a href="#">
                    <span class="title">
                    ${value.title}
                    </span>
                    <span class="price">
                       ￥<span>${value.price}</span>
                    </span>
                </a>
            </dd>
            <dd class="addbtns">
                <a href="#" class="add-cart">加入购物车</a>
            </dd>
        </dl>
    </li>
    `
        });
        $('.list').html($strhtml);

        $('.list-item').hover(function () {
            $(this).css({
                'border': '1px solid red'
            });
            $(this).find('.add-cart').css({
                'display': 'block'
            });
        }, function () {
            $(this).css({
                'border': 'none'
            });
            $(this).find('.add-cart').css({
                'display': 'none'
            });
        })

        $('.list-item').each(function (index, vlaue) {
            array_default[index] = $(this);
            array[index] = $(this);

        });

    });

    $('.page').pagination({
        pageCount: 3, //总的页数
        jump: true, //是否开启跳转到指定的页数，布尔值。
        coping: true, //是否开启首页和尾页，布尔值。
        prevContent: '上一页',
        nextContent: '下一页',
        homePage: '首页',
        endPage: '尾页',
        callback: function (api) {
            $.ajax({
                url: 'http://localhost/project-360/php/listdata.php',
                data: {
                    page: api.getCurrent()
                },
                dataType: 'json'
            }).done(function (d) {
                let $strhtml = '';
                $.each(d, function (index, value) {
                    $strhtml += `
                        <li class="list-item">
                        <dl class="desc">
                            <dt class="pic">
                                <a href="http://localhost/project-360/src/html/detail?sid=${value.sid}">
                                    <img src="${value.picurl}"
                                        alt="${value.title}">
                                </a>
                            </dt>
                            <dd class="cont">
                                <a href="#">
                                    <span class="title">
                                    ${value.title}
                                    </span>
                                    <span class="price">
                                       ￥ <span>${value.price}</span>
                                    </span>
                                </a>
                            </dd>
                            <dd class="addbtns">
                                <a href="#" class="add-cart">加入购物车</a>
                            </dd>
                        </dl>
                    </li>
                    `
                });
                $('.list').html($strhtml);

                array_default = []; //排序前的li数组
                array = []; //排序中的数组
                prev = null;
                next = null;

                $('.list').html($strhtml);

                $('.list-item').each(function (index, vlaue) {
                    array_default[index] = $(this);
                    array[index] = $(this);
                });
            })
        }
    });

    $('.a-active').on('click', function () {
        $.each(array_default, function (index, value) {
            $('.list').append(value);
        });
        return;
    });


    $('.price_up').on('click', function () {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - 1 - i; j++) {
                prev = parseFloat(array[j].find('.price span').html());
                next = parseFloat(array[j + 1].find('.price span').html());
                if (prev > next) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }

        $('.list').empty();
        $.each(array, function (index, value) {
            $('.list').append(value);
        });
    });

    $('.price_down').on('click', function () {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - 1 - i; j++) {
                prev = parseFloat(array[j].find('.price span').html());
                next = parseFloat(array[j + 1].find('.price span').html());
                if (prev < next) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }

        $('.list').empty();
        $.each(array, function (index, value) {
            $('.list').append(value);
        });
    });


}(jQuery);