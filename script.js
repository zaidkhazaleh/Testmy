// تأثيرات AOS
AOS.init();

// جزيئات الخلفية
particlesJS.load('particles-bg', 'particles-config.json');

// مشغل الصوت
const audio = document.getElementById('quran-radio');
document.getElementById('play-btn').addEventListener('click', () => {
    audio.paused ? audio.play() : audio.pause();
});

// تعبئة الروابط ديناميكياً
const links = [
    { name: "إنستغرام", url: "https://instagram.com/zd6", icon: "fab fa-instagram" },
    { name: "إذاعة القرآن", url: "radio-link", icon: "fas fa-microphone" }
];

const linksGrid = document.getElementById('links');
links.forEach(link => {
    linksGrid.innerHTML += `
        <a href="${link.url}" class="link-btn" data-aos="zoom-in">
            <i class="${link.icon}"></i> ${link.name}
        </a>
    `;
});
