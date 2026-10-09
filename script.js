document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('gruru-theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggle.textContent = 'MODE: BRIGHT';
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('gruru-theme', 'light');
            themeToggle.textContent = 'MODE: BRIGHT';
        } else {
            localStorage.setItem('gruru-theme', 'dark');
            themeToggle.textContent = 'MODE: LAB';
        }
    });

    // Button interaction (glitch effect simulation)
    const primaryBtn = document.querySelector('.btn-primary');
    primaryBtn.addEventListener('click', () => {
        primaryBtn.textContent = 'EXCAVATING...';
        setTimeout(() => {
            alert('กำลังเปิด Data Booming Graph...');
            primaryBtn.textContent = 'เริ่มขุดค้น';
        }, 1000);
    });
});
