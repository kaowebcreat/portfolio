const sections = document.querySelectorAll("section"); const overlay = document.getElementById("overlay"); const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target.id === 'design') { overlay.className = 'overlay design-bg'; } else if (entry.target.id === 'code') { overlay.className = 'overlay code-bg'; } else if (entry.target.id === 'about') { overlay.className = 'overlay about-bg'; }
        }
    });
}, { threshold: 0.3 }); sections.forEach(section => { observer.observe(section); });

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const boxes = document.querySelectorAll('.box');
    let hasAnimated = false;

    // Intersection Observer を作成
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                // アニメーションを一度だけ実行
                boxes.forEach((box, index) => {
                    setTimeout(() => {
                        box.classList.add('show');
                    }, index * 150); // 150ms 毎に順に表示
                });
                hasAnimated = true;
                observer.unobserve(grid); // 一度だけ監視して解除
            }
        });
    }, {
        threshold: 0.3 // 30% 見えたら発動
    });

    observer.observe(grid); // grid 要素を監視
});


document.addEventListener("DOMContentLoaded", () => {
    const glow = document.createElement('div'); glow.classList.add('cursor-glow');
    document.body.appendChild(glow);
    document.addEventListener('mousemove', (e) => { glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; });
});