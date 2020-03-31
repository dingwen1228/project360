! function ($) {
    function list(sid, num) {

        $.get('http://localhost/project-360/php/list.php', function (d) {
            $.each(d, function (index, value) {
                if (sid == value.sid) {
                    let $clonebox = $('.cart-item').filter(function () {
                        if ($(this).css("visibility") == "hidden" || $(this).css("display") == "none") {
                            return true;
                        }
                    }).clone(true, true);
                    $clonebox.find('.goods-info-left img').attr('src', value.picurl);
                    $clonebox.css({
                        'width': '1020',
                        'height': '104'
                    });
                    $clonebox.find('.goods-info-left img').attr('sid', value.sid);
                    $clonebox.find('figcaption .item-title').html(value.title);
                    $clonebox.find('.my-type').html(value.brand);
                    $clonebox.find('.price span').html(value.price);
                    $clonebox.find('.item_total .total span').html(value.price);
                    $clonebox.find('.total span').html((value.price * num).toFixed(2));
                    $clonebox.find('.modifier-value').val(num);
                    $clonebox.css('visibility', 'visible');
                    $('tbody').prepend($clonebox);
                    calsall();
                    // $('tbody .cart-item:last').remove();
                }

            })
        }, 'json');
    }

    function singleprice(obj) {
        let $price = parseFloat(obj.parents('.cart-item').find('.price span').html());
        let $num = parseFloat(obj.parents('.cart-item').find('.modifier-value').val());
        return ($num * $price).toFixed(2);
    }

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

    function setcookie(obj) {
        cookietoarray();
        let $sid = obj.parents('.cart-item').find('.goods-info-left img').attr('sid');
        let $num = obj.parents('.cart-item').find('.modifier-value').val();
        arrnum[$.inArray($sid, arrsid)] = $num;
        jscookie.add('cookienum', arrnum, 10);

    }

    function del($sid, arrsid) {
        let $index = -1;
        $.each(arrsid, function (index, value) {
            if ($sid === value) {
                $index = index;
            }
        });
        arrsid.splice($index, 1);
        arrnum.splice($index, 1);

        jscookie.add('cookiesid', arrsid, 10);
        jscookie.add('cookienum', arrnum, 10);

    }

    function calsall() {
        let $sum = 0;
        let $price = 0;

        $('tbody .cart-item:visible').each(function (index, value) {
            if ($(value).find('.common-checkbox').prop('checked')) {
                $sum += parseInt($(value).find('.modifier-value').val());

                $price += parseFloat($(value).find('.total span').html());
            }
        });
        $sum = $sum - 1;
        $sum < 0 ? $sum = 0 : $sum;
        console.log($sum);

        $('.jnum b').html($sum);
        $('.unit').html($price.toFixed(2));
    }

    $('.common-checkbox-all').on('change', function () {
        $('tbody .cart-item:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
        $('.common-checkbox-all').prop('checked', $(this).prop('checked'));
        calsall();
    });

    let $inputs = $('tbody .cart-item:visible').find(':checkbox');
    $('tbody').on('change', $inputs, function () {
        if ($('tbody .cart-item:visible').find(':checked').length === $('tbody .cart-item:visible').find('.common-checkbox').size()) {
            $('.common-checkbox-all').prop('checked', true);
        } else {
            $('.common-checkbox-all').prop('checked', false);
        }
        calsall();
    });

    if (jscookie.get('cookiesid') && jscookie.get('cookienum')) {
        let sid = jscookie.get('cookiesid').split(',');
        let num = jscookie.get('cookienum').split(',');
        $.each(sid, function (index, value) {
            list(sid[index], num[index]);
        });
    }

    $('.modifier-sub').on('click', function () {
        let $num = $(this).parents('.goods_num').find('.modifier-value').val();
        $num <= 1 ? $num = 1 : $num--;
        $(this).parents('.goods_num').find('.modifier-value').val($num);
        $(this).parents('.cart-item').find('.total span').html(singleprice($(this)));
        setcookie($(this));
        calsall();
    });

    $('.modifier-add').on('click', function () {
        let $num = $(this).parents('.goods_num').find('.modifier-value').val();
        $num++;
        $(this).parents('.goods_num').find('.modifier-value').val($num);
        $(this).parents('.cart-item').find('.total span').html(singleprice($(this)));
        setcookie($(this));
        calsall();
    });

    $('.modifier-value').on('input', function () {
        let $reg = /^\d+$/g;
        let $val = $(this).val();
        if (!$reg.test($val)) {
            $(this).val(1);
        }
        $(this).parents('.cart-item').find('.total span').html(singleprice($(this)));
        setcookie($(this));
        calsall();
    })

    $('.js_del').on('click', function () {
        cookietoarray();
        if (window.confirm('你是否要删除?')) {
            $(this).parents('.cart-item').remove();
        }
        $sid = $(this).parents('.cart-item').find('.goods-info-left img').attr('sid');
        del($sid, arrsid);
        calsall();
    });

    $('.delCheck').on('click', function () {
        cookietoarray();
        if (window.confirm('你是否要全部删除?')) {
            $('.cart-item').not(':last').each(function (index, value) {
                if ($(this).find(':checkbox').is(':checked')) {
                    $(this).remove();
                    $sid = $(this).find('.goods-info-left img').attr('sid');
                    del($sid, arrsid);
                }
            });
            calsall();
        }
    })

}(jQuery);