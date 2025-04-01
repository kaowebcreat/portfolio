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
    const glow = document.createElement('div');
    glow.classList.add('cursor-glow');
    document.body.appendChild(glow);
    
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    
    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });
    
    function animate() {
        // Easing factor - lower value = slower movement (0.05-0.1 is a good range)
        const ease = 0.01;
        
        // Calculate the distance between current and target positions
        currentX += (targetX - currentX) * ease;
        currentY += (targetY - currentY) * ease;
        
        // Apply the position with the smooth movement
        glow.style.transform = `translate(${currentX}px, ${currentY}px)`;
        
        // Continue the animation loop
        requestAnimationFrame(animate);
    }
    
    // Start the animation loop
    animate();
});

document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('portfolio-title');
    const text = title.textContent;
    
    // タイトルの内容をクリア
    title.textContent = '';
    
    // 文字を一文字ずつ分割して新しい要素として追加
    for (let i = 0; i < text.length; i++) {
        const letterContainer = document.createElement('span');
        letterContainer.className = 'letter-container';
        
        const letter = document.createElement('span');
        letter.className = 'letter';
        letter.textContent = text[i];
        
        letterContainer.appendChild(letter);
        title.appendChild(letterContainer);
    }
});

