document.addEventListener('DOMContentLoaded', function() {
    // 페이지 로드 시 부드러운 애니메이션 효과
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    
    // 헤더 요소 페이드인
    setTimeout(() => {
        header.style.opacity = '1';
    }, 100);
    
    // 각 섹션 요소 순차적으로 페이드인
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
        }, 300 + (index * 200));
    });
    
    // 이메일 링크 클릭 시 이벤트 (선택적)
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 여기에 트래킹 코드나 다른 기능 추가 가능
            console.log('이메일 링크 클릭됨');
        });
    });
});

// 페이지가 완전히 로드된 후 실행
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});