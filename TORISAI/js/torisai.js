$(document).ready(function () {
    // バーガーメニューの開閉
    $('.menu').click(function () {
        $('.nav-menu').slideToggle();
    });

    // スムーズスクロール
    $('.nav-menu a').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 60
        }, 800, 'swing');
        $('.nav-menu').slideUp();
    });

    // スクロールイベントでフェードイン
    $(window).on('scroll', function () {
        var windowHeight = $(window).height();
        var scrollPosition = $(window).scrollTop();
        $('section').each(function () {
            var elementOffset = $(this).offset().top;
            if (scrollPosition + windowHeight > elementOffset + 100) {
                $(this).addClass('visible');
            }
        });
    });

    // 初回ロード時にスクロール位置を確認
    $(window).trigger('scroll');

    const imagesContainer = document.querySelector('.images-container');
    const images = document.querySelectorAll('.images-container img');
    const imageWidth = images[0].width; // 各画像の幅（120px）

    function slideImages() {
        // スライドアニメーション
        imagesContainer.style.transition = 'transform 0.8s ease-in-out';
        imagesContainer.style.transform = `translateX(-${imageWidth}px)`;

        // アニメーション後に最初の画像を最後に移動
        setTimeout(() => {
            imagesContainer.style.transition = 'none'; // 瞬時にリセット
            imagesContainer.appendChild(imagesContainer.firstElementChild); // 最初の画像を最後に移動
            imagesContainer.style.transform = `translateX(0)`; // 位置をリセット
        }, 800); // アニメーション終了後に処理を実行
    }

    // 3秒ごとにスライドを実行
    setInterval(slideImages, 3000);


});