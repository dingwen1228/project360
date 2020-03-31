! function ($) {
    const $usename = $('#r-username');

    let userlock = true;

}(jQuery);

! function ($) {
    let flag1 = 0;
    let flag2 = 0;
    let flag3 = 0;
    let flag4 = 0;
    $('#r-username').on('blur', function () {
        var reg = /^[\u4e00-\u9fa5\w]+$/g;
        if ($(this).val() !== '') {
            if (reg.test($(this).val())) {
                $(this).prev().html("√");
                $(this).prev().css('color', 'green');
                flag1 = 1;
            } else {
                $(this).prev().html("用户名格式不对");
                $(this).prev().css('color', 'red');
                flag1 = 0;
            }
        } else {
            $(this).prev().html("用户名不能为空");
            $(this).prev().css('color', 'red');
            flag1 = 0;
        }
    });

    $('#r-inputEmail1').on('blur', function () {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g;
        if ($(this).val() !== '') {
            if (reg.test($(this).val())) {
                $(this).prev().html("√");
                $(this).prev().css('color', 'green');
                flag2 = 1;
            } else {
                $(this).prev().html("邮箱格式不对");
                $(this).prev().css('color', 'red');
                flag2 = 0;
            }
        } else {
            $(this).prev().html("邮箱不能为空");
            $(this).prev().css('color', 'red');
            flag2 = 0;
        }
    });

    $('#r-phone').on('blur', function () {
        var reg = /^([1]\d{10}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/g;
        if ($(this).val() !== '') {
            if (reg.test($(this).val())) {
                $(this).prev().html("√");
                $(this).prev().css('color', 'green');
                flag3 = 1;
            } else {
                $(this).prev().html("电话号码格式不对");
                $(this).prev().css('color', 'red');
                flag3 = 0;
            }
        } else {
            $(this).prev().html("电话号码不能为空");
            $(this).prev().css('color', 'red');
            flag3 = 0;
        }
    });

    $('#r-password').on('input', function () {
        if ($(this).val().length >= 6 && $(this).val().length <= 12) {
            var regnum = /\d+/g;
            var reguppercase = /[A-Z]+/g;
            var reglowercase = /[a-z]+/g;
            var other = /[\W_]+/g;
            var count = 0;
            if (regnum.test($(this).val())) {
                count++;
            }
            if (reguppercase.test($(this).val())) {
                count++;
            }
            if (reglowercase.test($(this).val())) {
                count++;
            }
            if (other.test($(this).val())) {
                count++;
            }
            switch (count) {
                case 1:
                    $(this).prev().html("密码强度弱");
                    $(this).prev().css('color', 'red');
                    flag4 = 0;
                    break;
                case 2:
                case 3:
                    $(this).prev().html("密码强度中");
                    $(this).prev().css('color', 'orange');
                    flag4 = 1;
                    break;
                case 4:
                    $(this).prev().html("密码强度强");
                    $(this).prev().css('color', 'green');
                    flag4 = 1;
                    break;
            }
        } else {
            $(this).prev().html("密码长度错误");
            $(this).prev().css('color', 'red');
        }
    });

    $('#r-password').on('blur', function () {
        if ($(this).val() !== '') {
            if (flag4) {
                $(this).prev().html("√");
                $(this).prev().css('color', 'green');
            } else {
                $(this).prev().html("密码格式不对");
                $(this).prev().css('color', 'red');
            }
        } else {
            $(this).prev().html("密码不能为空");
            $(this).prev().css('color', 'red');
            flag4 = 0;
        }
    });

    $('.regestry-btn').on('click', function () {

        if (flag1 && flag2 && flag3 && flag4) {
            $.ajax({
                type: 'post',
                url: 'http://localhost/project-360/php/registry.php',
                data: {
                    user: $('#r-username').val(),
                    password: $('#r-password').val(),
                    email: $('#r-inputEmail1').val(),
                    phone: $('#r-phone').val()
                }
            }).done(function (d) {
                if (!d) {
                    alert('你已成功注册');
                    userlock = true;
                    window.location = 'http://localhost/project-360/src/html/';
                } else {
                    alert('用户名重复');
                    userlock = false;
                }
            })
        } else {
            return false;
        }
    });

}(jQuery);