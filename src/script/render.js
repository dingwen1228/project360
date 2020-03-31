//  part2 限时购
$.ajax({
    type: 'post',
    url: 'http://localhost/project-360/php/index-rander.php',
    dataType: 'json',
}).done(function (d) {
    let $strhtml = '';
    $.each(d.data1, function (index, value) {
        $strhtml += `
            <div sid='${value.sid}' class="shopping_main_right_content">
                <a href="#" class="rush-item-img">
                    <img class="lazy"  data-original="${value.url}"alt=""/>
                </a>
                <div class="rush-item-info">
                    <a href="#" class="title_morename"> ${value.title}</a>
                    <p class="price">
                        <span class="cur-price">¥${value.newprice}</span>
                        <span class="old-price">¥${value.oldprice}</span>
                    </p>
                </div>
                <div class="btns-box">
                    <a href="#" class="btn-rush">
                        马上抢
                    </a>
                    <span class="progress">
                        <b style="width:33%"></b>
                    </span>
                    <span class="extra-tips">
                        33%
                    </span>
                </div>
            </div>
            `
    });
    $('.shopping_main_right').html($strhtml);
    $("img.lazy").lazyload({
        effect: "fadeIn" //图片显示方式
    });
});

//part4 安全路由
$.ajax({
    type: 'post',
    url: 'http://localhost/project-360/php/index-rander.php',
    dataType: 'json',
}).done(function (d) {
    let $strhtml = '';
    $strhtml += `
    <a href="#" class="first_item hover-item">
                        <img  class="lazy"  data-original="https://p0.ssl.qhimg.com/t014ac28cfcdfd0f3f3.webp" alt="">
                    </a>
    `
    $.each(d.data2, function (index, value) {
        $strhtml += `
        <a href="#" class="product-item hover-item" sid='${value.sid}'>

        <div class="top-label">新品</div>

        <div class="item-img">
        <img class="lazy"  data-original="${value.url}"alt=""/>
        </div>
        <p class="title_name">${value.title}</p>
        <p class="desc" title="${value.content}">${value.content}</p>
        <p class="price">
            <span class="cur-price">¥${value.newprice}</span>
            <span class="old-price">¥${value.oldprice}</span>
        </p>
    </a>
            `
    });
    $('.index_main_content1').html($strhtml);
    $("img.lazy").lazyload({
        effect: "fadeIn" //图片显示方式
    });
});

//part5 家庭安全 
$.ajax({
    type: 'post',
    url: 'http://localhost/project-360/php/index-rander.php',
    dataType: 'json',
}).done(function (d) {
    let $strhtml = '';
    $strhtml += `
    <a href="#" class="first_item hover-item">
                        <img  class="lazy"  data-original="https://p0.ssl.qhimg.com/t01ef786f31a6b96cd7.webp" alt="">
                    </a>
    `
    $.each(d.data3, function (index, value) {
        $strhtml += `
        <a href="#" class="product-item hover-item" sid='${value.sid}'>
        <div class="top-label">爆款</div>
        <div class="item-img">
        <img class="lazy"  data-original="${value.url}"alt=""/>
        </div>
        <p class="title_name">${value.title}</p>
        <p class="desc" title="${value.content}">${value.content}</p>
        <p class="price">
            <span class="cur-price">¥${value.newprice}</span>
            <span class="old-price">¥${value.oldprice}</span>
        </p>
    </a>
            `
    });
    $('.index_main_content2').html($strhtml);
    $("img.lazy").lazyload({
        effect: "fadeIn" //图片显示方式
    });
});

//part6 行车安全
$.ajax({
    type: 'post',
    url: 'http://localhost/project-360/php/index-rander.php',
    dataType: 'json',
}).done(function (d) {
    let $strhtml = '';
    $strhtml += `
    <a href="#" class="first_item hover-item">
                        <img  class="lazy"  data-original="https://p3.ssl.qhimg.com/t01bd7aca85b6e76658.webp" alt="">
                    </a>
    `
    $.each(d.data4, function (index, value) {
        $strhtml += `
        <a href="#" class="product-item hover-item" sid='${value.sid}'>
        <div class="top-label">爆款</div>
        <div class="item-img">
        <img class="lazy"  data-original="${value.url}"alt=""/>
        </div>
        <p class="title_name">${value.title}</p>
        <p class="desc" title="${value.content}">${value.content}</p>
        <p class="price">
            <span class="cur-price">¥${value.newprice}</span>
            <span class="old-price">¥${value.oldprice}</span>
        </p>
    </a>
            `
    });
    $('.index_main_content3').html($strhtml);
    $("img.lazy").lazyload({
        effect: "fadeIn" //图片显示方式
    });
});

//part7 扫地机器人
$.ajax({
    type: 'post',
    url: 'http://localhost/project-360/php/index-rander.php',
    dataType: 'json',
}).done(function (d) {
    let $strhtml = '';
    $strhtml += `
    <a href="#" class="first_item hover-item">
                        <img  class="lazy"  data-original="https://p5.ssl.qhimg.com/t012617738c60d5f88d.webp" alt="">
                    </a>
    `
    $.each(d.data5, function (index, value) {
        $strhtml += `
        <a href="#" class="product-item hover-item" sid='${value.sid}'>
        <div class="top-label">爆款</div>
        <div class="item-img">
        <img class="lazy"  data-original="${value.url}"alt=""/>
        </div>
        <p class="title_name">${value.title}</p>
        <p class="desc" title="${value.content}">${value.content}</p>
        <p class="price">
            <span class="cur-price">¥${value.newprice}</span>
            <span class="old-price">¥${value.oldprice}</span>
        </p>
    </a>
            `
    });
    $('.index_main_content4').html($strhtml);
    $("img.lazy").lazyload({
        effect: "fadeIn" //图片显示方式
    });
});

//part8 儿童守护
$.ajax({
    type: 'post',
    url: 'http://localhost/project-360/php/index-rander.php',
    dataType: 'json',
}).done(function (d) {
    let $strhtml = '';
    $strhtml += `
    <a href="#" class="first_item hover-item">
                        <img  class="lazy"  data-original="https://p0.ssl.qhimg.com/t0178c297e7af798453.webp" alt="">
                    </a>
    `
    $.each(d.data6, function (index, value) {
        $strhtml += `
        <a href="#" class="product-item hover-item" sid='${value.sid}'>
        <div class="top-label">爆款</div>
        <div class="item-img">
        <img class="lazy"  data-original="${value.url}"alt=""/>
        </div>
        <p class="title_name">${value.title}</p>
        <p class="desc" title="${value.content}">${value.content}</p>
        <p class="price">
            <span class="cur-price">¥${value.newprice}</span>
            <span class="old-price">¥${value.oldprice}</span>
        </p>
    </a>
            `
    });
    $('.index_main_content5').html($strhtml);
    $("img.lazy").lazyload({
        effect: "fadeIn" //图片显示方式
    });
});

//part9 视频
$.ajax({
    type: 'post',
    url: 'http://localhost/project-360/php/index-rander.php',
    dataType: 'json',
}).done(function (d) {
    let $strhtml = '';
    $.each(d.data7, function (index, value) {
        $strhtml += `
        <div class="video-item" sid='${value.sid}'>
        <div class="video-img">
        <img class="lazy"  data-original="${value.url}"alt=""/>
        </div>
        <div class="item-info">
            <a href="#" class="title_name" title="${value.title}">${value.title}</a>
            <p class="desc" title="${value.content}">${value.content}</p>
            <p class="price"><span class="cur-price">¥${value.newprice}</span></p>
            <a href="#" class="btn-main">立即购买</a>
        </div>
    </div>`
    });
    $('.index_video_body').html($strhtml);
    $("img.lazy").lazyload({
        effect: "fadeIn" //图片显示方式
    });
});

//part10 社区
$.ajax({
    type: 'post',
    url: 'http://localhost/project-360/php/index-rander.php',
    dataType: 'json',
}).done(function (d) {
    let $strhtml = '';
    $.each(d.data8, function (index, value) {
        $strhtml += `
        <div class="community-item" sid="${value.sid}">
        <div class="community-img">
        <img class="lazy"  data-original="${value.url}"alt=""/>
        </div>
        <div class="article-info">
            <p class="title_name" title="${value.title}">
            ${value.title}
            </p>
            <p class="des"
                title="${value.content}">
                ${value.content}
            </p>
            <p class="publish-info">
            </p>
        </div>
    </div>`
    });
    $('.index_community_body').html($strhtml);
    $("img.lazy").lazyload({
        effect: "fadeIn" //图片显示方式
    });
});

//part11 更多
$.ajax({
    type: 'post',
    url: 'http://localhost/project-360/php/index-rander.php',
    dataType: 'json',
}).done(function (d) {
    let $strhtml = '';
    $.each(d.data9, function (index, value) {
        $strhtml += `
        <a class="feed-item" href="#" sid="${value.sid}">
            <div class="item-img">
            <img class="lazy"  data-original="${value.url}"alt=""/>
            </div>
            <p class="title_name">${value.title}</p>
            <p class="price">
                <span class="cur-price">¥${value.newprice}</span>
            </p>
            <p class="label-line">
            </p>
         </a>  
        `
    });
    $('.feed-list').html($strhtml);
    $("img.lazy").lazyload({
        effect: "fadeIn" //图片显示方式
    });
});