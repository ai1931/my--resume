document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    const toggleBtn = document.getElementById('toggleBtn');
    const btnText = toggleBtn.querySelector('.btn-text');

    // ── 명함 ↔ 이력서 전환 ──
    toggleBtn.addEventListener('click', () => {
        cardContainer.classList.toggle('active-resume');

        if (cardContainer.classList.contains('active-resume')) {
            btnText.textContent = '명함 보기';

            const resumeContent = cardContainer.querySelector('.card-back-content');
            if (resumeContent) {
                resumeContent.scrollTop = 0;
            }

            // 이력서 내부 요소 순차 등장 애니메이션
            requestAnimationFrame(() => {
                const items = cardContainer.querySelectorAll('.card-back [data-animate]');
                items.forEach((el, i) => {
                    el.classList.remove('animate-in');
                    setTimeout(() => el.classList.add('animate-in'), 120 + i * 80);
                });
            });
        } else {
            btnText.textContent = '이력서 보기';

            // 이력서 요소 초기화
            const items = cardContainer.querySelectorAll('.card-back [data-animate]');
            items.forEach(el => el.classList.remove('animate-in'));
        }
    });

    // ── 명함 요소 초기 등장 애니메이션 ──
    const frontItems = cardContainer.querySelectorAll('.card-front [data-animate]');
    frontItems.forEach((el, i) => {
        setTimeout(() => el.classList.add('animate-in'), 400 + i * 120);
    });
});
