! function ($) {
    const $usename = $('#l-username');

    $('.login-btn').on('click', function () {
        if ($usename.val() !== '' && $('#l-password').val() !== '') {
            $.ajax({
                type: 'post',
                url: 'http://localhost/project-360/php/login.php',
                data: {
                    user: $usename.val(),
                    password: $('#l-password').val()
                }
            }).done(function (d) {
                if (!d) {
                    alert('登录失败，用户名或者密码错误');
                } else {
                    jscookie.add('loginname', $('#l-username').val(), 7);
                    location.href = 'http://localhost/project-360/src/html';
                }
            })
        } else {
            alert('用户名或者密码不能为空');
        }
    });
}(jQuery);