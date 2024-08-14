// 元の背景画像を設定
const initialBg = '../img/back.png';

// 背景画像をフェードインで変更し、ループを止めるスクリプト
const bgLoop = document.querySelector('.bg-image-loop');


document.querySelectorAll('.loop_wrap ul li').forEach(item => {
    item.addEventListener('mouseover', () => {
        const newBg = item.getAttribute('data-bg');
        bgLoop.style.backgroundImage = `url('${newBg}')`;
        bgLoop.style.backgroundSize = '110%'; // 切り替え時は cover
        bgLoop.style.width = '100vw';
        bgLoop.style.backgroundRepeat = 'repeat';
        bgLoop.style.animationPlayState = 'none'; // ループを止める
    });

    item.addEventListener('mouseout', () => {
        bgLoop.style.backgroundImage = `url('${initialBg}')`; // 元の背景に戻す
        bgLoop.style.animationPlayState = 'running'; // ループを再開
        bgLoop.style.width = '10000px';
    });
});

// script.js
$(document).ready(function() {
    var modal1 = $('#modal1');
    var span = $('.close');
    var loop = $('.bg-image-loop');

    // モーダルを開く
    $('.modal1_open').click(function() {
        loop.fadeOut();
        modal1.fadeIn();
    });

    // モーダルを閉じる
    span.click(function() {
        modal1.hide();
    });

    // モーダルの外側をクリックすると閉じる
    $(window).click(function(event) {
        if ($(event.target).is(modal1)) {
            modal1.hide();
        }
    });
});