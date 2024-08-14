document.addEventListener('DOMContentLoaded', function() {
    const hoverArea = document.querySelector('.hover-area');
    const audio = document.getElementById('hover-audio');

    hoverArea.addEventListener('mouseenter', function() {
        audio.currentTime = 0;  // 音楽を最初から再生
        audio.play();
    });

    hoverArea.addEventListener('mouseleave', function() {
        audio.pause();  // 音楽を停止
    });
});
