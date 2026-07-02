// ============================================================
// 数据 (从新到旧排序)
// ============================================================

// ---------- 项目 (从新到旧) ----------
var projectsData = [
    {
        id: 1,
        year: 2026,
        title: 'Eco Pack Hub E-Commerce Platform',
        description: 'Create a Web Application using PHP, HTML, CSS. Develop by Laravel Framework.',
        image: 'images/project1.jpg',
        tech: ['PHP', 'HTML', 'CSS', 'Laravel']
    },
    {
        id: 2,
        year: 2026,
        title: 'Movie Booking System',
        description: 'Create a Web Application using PHP, HTML, CSS. Develop by Laravel Framework.',
        image: 'images/project2.jpg',
        tech: ['PHP', 'HTML', 'CSS', 'Laravel']
    },
    {
        id: 3,
        year: 2025,
        title: 'E-Commerce Web Application',
        description: 'Modify an existing Web Application using PHP, HTML, CSS. Develop by Laravel Framework.',
        image: 'images/project3.jpg',
        tech: ['PHP', 'HTML', 'CSS', 'Laravel']
    },
    {
        id: 4,
        year: 2025,
        title: 'Canteen Ordering and Crediting App',
        description: 'Developed by TypeScript (React Native). Built an Intuitive User Interface with React Native Component. Implemented Data Persistence and Cloud Connectivity.',
        image: 'images/project4.jpg',
        tech: ['TypeScript', 'React Native']
    },
    {
        id: 5,
        year: 2024,
        title: 'Parking Management System',
        description: 'Create a console-based system using Java (Object-Oriented Programming). Implemented efficient parking management logic.',
        image: 'images/project5.jpg',
        tech: ['Java', 'OOP']
    },
    {
        id: 6,
        year: 2024,
        title: 'Food Ordering System',
        description: 'Created a console-based system using C++ (Structured Programming). Implemented menu management and order processing.',
        image: 'images/project6.jpg',
        tech: ['C++']
    }
];

// ---------- 工作经历 (从新到旧) ----------
var experiencesData = [
    {
        period: "Dec'25 - Current",
        title: 'Male Hairstylist',
        description: 'Only help customer set their hair (for event, usher, etc)'
    },
    {
        period: "May'25 - Current",
        title: 'Part-Time Taekwondo Coach',
        description: 'Conduct Training Session Every Thursday Night. Coordinate team sessions, focusing on skill development and discipline. Mentored students to enhance their technical and competitive abilities.'
    },
    {
        period: "Nov'24 - Current",
        title: 'Freelance Model',
        description: 'Collaborated in various photo shoots, including hair modeling.'
    },
    {
        period: "Oct'25 - Jan'26",
        title: 'Internship in Weitizen Sdn. Bhd.',
        description: 'Get good feedback from colleague and director. Learn the Laravel Framework.'
    },
    {
        period: "Oct'23 - Dec'23",
        title: 'Part-Time Restaurant Staff',
        description: 'Managed high-volume orders with speed and accuracy during peak hour.'
    },
    {
        period: "Apr'22 - Oct'22",
        title: 'Renovation Worker',
        description: 'Installed over 100 glass doors and windows project, ensuring quality and safety.'
    }
];

// ---------- 成就 (从新到旧) ----------
var achievementsData = [
    // 2026
    { category: 'taekwondo', year: 2026, title: 'LeTAC Championship', detail: '🥇 Gold - Individual Sparring / 🥉 Bronze - Individual Pattern / 🥉 Bronze - Team Sparring' },
    { category: 'taekwondo', year: 2026, title: 'Instructor Course Level 1', detail: '📜 Certificate as International Instructor under PGTF' },
    { category: 'chinese', year: 2026, title: 'Trajectory Inter-University Camp 2026', detail: 'Head of Department of Public Relation' },
    { category: 'chinese', year: 2026, title: 'Prismence Stage Drama 2026', detail: 'Head of Department of Public Relation / Stage Drama Actor' },
    // 2025
    { category: 'taekwondo', year: 2025, title: 'Become the Coach', detail: 'Part-Time Coacher in One Martial Arts' },
    { category: 'taekwondo', year: 2025, title: 'Best of The Best Taekwondo Championship', detail: 'Team Leader & Coach brings the student for the competition' },
    { category: 'taekwondo', year: 2025, title: '2nd Degree Black Belt', detail: 'From BSK Taekwon-Do Academy under PGTF' },
    { category: 'taekwondo', year: 2025, title: '5th MFA Taekwondo Invitation Championship', detail: 'Served as Referee & Judge at Color Belt Category' },
    { category: 'chinese', year: 2025, title: 'Gilded Ruin Stage Drama 2025', detail: 'Usher' },
    // 2024
    { category: 'taekwondo', year: 2024, title: 'TTA Taekwondo Championship', detail: '🥉 Bronze - Individual Sparring / 🥉 Bronze - Team Sparring' },
    { category: 'taekwondo', year: 2024, title: '4th MFA Taekwondo Invitation Championship', detail: '🥇 Gold - Individual Sparring' },
    { category: 'taekwondo', year: 2024, title: 'GTF National Taekwondo Tournament', detail: '🥉 Bronze - Team Pattern / 🥉 Bronze - Team Sparring / Served as Referee & Judge' },
    // 2023
    { category: 'taekwondo', year: 2023, title: 'GTF Selangor State Taekwondo Tournament', detail: '🥈 Silver - Individual Sparring / Served as Referee & Judge' },
    // 2022
    { category: 'taekwondo', year: 2022, title: '1st Degree Black Belt', detail: 'From North Peninsular Malaysia Taekwon-Do Association' },
    // 2021
    { category: 'taekwondo', year: 2021, title: 'SMK Bagan Jaya Taekwondo Club', detail: 'Become Taekwondo Club Chairperson' },
    // 2019
    { category: 'taekwondo', year: 2019, title: 'NPM Penang State Taekwondo Tournament', detail: '🥉 Bronze - White to Green Belt Under 16 Team Pattern' },
    // 2013
    { category: 'other', year: 2013, title: 'DYNABOOK Grade Exam', detail: 'Achieved Distinction' }
];

// ---------- 多语言 ----------
var translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.education': 'Education',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.achievements': 'Achievements',
        'nav.contact': 'Contact',
        'hero.badge': '👋 Welcome',
        'hero.bio': "I'm a final-year Software Engineering student at UTAR with a strong passion for building clean, user-centric applications. Skilled in Laravel, React Native, and Java, I enjoy turning ideas into functional digital experiences. Beyond coding, I'm an active Taekwondo athlete and coach, which has shaped my discipline, teamwork, and leadership — values I bring into every project I work on.",
        'about.title': 'About Me',
        'about.content': "I'm a final-year Software Engineering student at UTAR with a strong passion for building clean, user-centric applications. Skilled in Laravel, React Native, and Java, I enjoy turning ideas into functional digital experiences. Beyond coding, I'm an active Taekwondo athlete and coach, which has shaped my discipline, teamwork, and leadership — values I bring into every project I work on.",
        'about.age': 'Age',
        'about.nationality': 'Nationality',
        'about.university': 'University',
        'education.title': 'Education',
        'skills.title': 'Technical Skills',
        'skills.programming': 'Programming Languages',
        'skills.core': 'Core Competencies',
        'skills.languages': 'Languages',
        'projects.title': 'Technical Projects',
        'experience.title': 'Work Experience',
        'achievements.title': 'Achievements',
        'contact.title': 'Get in Touch',
        'contact.subtitle': "Feel free to reach out through any of the channels below"
    },
    zh: {
        'nav.home': '首页',
        'nav.about': '关于我',
        'nav.education': '教育',
        'nav.skills': '技能',
        'nav.projects': '项目',
        'nav.experience': '经历',
        'nav.achievements': '成就',
        'nav.contact': '联系',
        'hero.badge': '👋 欢迎',
        'hero.bio': '我是一名 UTAR 软件工程系大学生，热衷于构建简洁、以用户为中心的应用程序。熟悉 Laravel、React Native 和 Java，喜欢将想法转化为实用的数字产品。在编程之外，我是一名活跃的跆拳道运动员和教练，这项运动塑造了我的纪律性、团队精神和领导力——这些价值观也贯穿于我的每一个项目。',
        'about.title': '关于我',
        'about.content': '我是一名 UTAR 软件工程系大学生，热衷于构建简洁、以用户为中心的应用程序。熟悉 Laravel、React Native 和 Java，喜欢将想法转化为实用的数字产品。在编程之外，我是一名活跃的跆拳道运动员和教练，这项运动塑造了我的纪律性、团队精神和领导力——这些价值观也贯穿于我的每一个项目。',
        'about.age': '年龄',
        'about.nationality': '国籍',
        'about.university': '大学',
        'education.title': '教育背景',
        'skills.title': '技术技能',
        'skills.programming': '编程语言',
        'skills.core': '核心能力',
        'skills.languages': '语言',
        'projects.title': '技术项目',
        'experience.title': '工作经历',
        'achievements.title': '荣誉与成就',
        'contact.title': '保持联系',
        'contact.subtitle': '欢迎通过以下方式与我联系'
    }
};

// ============================================================
// 状态
// ============================================================
var currentLang = 'zh';
var typingInterval = null;


// ============================================================
// 渲染函数
// ============================================================

// ---------- 项目 ----------
function renderProjects(filter) {
    if (filter === undefined) filter = 'all';
    var grid = document.getElementById('projectGrid');
    var filtered;
    if (filter === 'all') {
        filtered = projectsData;
    } else {
        filtered = projectsData.filter(function(p) { return p.year === parseInt(filter); });
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var p = filtered[i];
        var techHtml = '';
        for (var j = 0; j < p.tech.length; j++) {
            techHtml += '<span class="badge bg-light text-dark border">' + p.tech[j] + '</span>';
        }
        html += '<div class="col-md-6 col-lg-4 project-item" data-year="' + p.year + '">';
        html += '  <div class="card border-0 shadow-sm project-card h-100">';
        html += '    <img src="' + p.image + '" class="card-img-top" alt="' + p.title + '" onerror="this.src=\'https://placehold.co/600x400/e9ecef/6c757d?text=' + encodeURIComponent(p.title) + '\'">';
        html += '    <div class="card-body d-flex flex-column">';
        html += '      <span class="badge bg-dark text-white rounded-pill mb-2" style="width:fit-content;">' + p.year + '</span>';
        html += '      <h5 class="card-title fw-bold">' + p.title + '</h5>';
        html += '      <p class="card-text text-secondary small flex-grow-1">' + p.description + '</p>';
        html += '      <div class="d-flex flex-wrap gap-1 mt-2">' + techHtml + '</div>';
        html += '    </div>';
        html += '  </div>';
        html += '</div>';
    }
    grid.innerHTML = html;
}

// ---------- 工作经历 ----------
function renderExperiences() {
    var container = document.getElementById('experienceTimeline');
    var html = '';
    for (var i = 0; i < experiencesData.length; i++) {
        var exp = experiencesData[i];
        html += '<div class="timeline-item" data-aos="fade-up" data-aos-delay="' + (i * 50) + '">';
        html += '  <div class="timeline-badge"></div>';
        html += '  <div class="timeline-content card border-0 shadow-sm p-4">';
        html += '    <span class="badge bg-dark text-white rounded-pill mb-2" style="width:fit-content;">' + exp.period + '</span>';
        html += '    <h5 class="fw-bold">' + exp.title + '</h5>';
        html += '    <p class="text-secondary mb-0">' + exp.description + '</p>';
        html += '  </div>';
        html += '</div>';
    }
    container.innerHTML = html;
}

// ---------- 成就 (按年份分组 - 从新到旧) ----------
function renderAchievements(filter) {
    if (filter === undefined) filter = 'all';
    var container = document.getElementById('achievementContainer');
    
    var filtered;
    if (filter === 'all') {
        filtered = achievementsData;
    } else {
        filtered = achievementsData.filter(function(a) { return a.category === filter; });
    }

    // 按年份分组
    var grouped = {};
    for (var i = 0; i < filtered.length; i++) {
        var a = filtered[i];
        if (!grouped[a.year]) grouped[a.year] = [];
        grouped[a.year].push(a);
    }

    // 年份从新到旧排序
    var years = Object.keys(grouped);
    years.sort(function(a, b) { return b - a; });

    var html = '';
    for (var y = 0; y < years.length; y++) {
        var year = years[y];
        html += '<div class="mb-4" data-aos="fade-up">';
        html += '  <h4 class="fw-bold mb-3" style="border-left:4px solid #1a1a1a;padding-left:16px;">' + year + '</h4>';
        html += '  <div class="row g-2">';
        for (var k = 0; k < grouped[year].length; k++) {
            var item = grouped[year][k];
            html += '<div class="col-12">';
            html += '  <div class="achievement-item p-3 bg-white rounded-3 shadow-sm border" style="transition:0.2s;">';
            html += '    <div class="d-flex align-items-center gap-2 flex-wrap">';
            html += '      <span class="fw-semibold">' + item.title + '</span>';
            html += '      <span class="text-secondary small">— ' + item.detail + '</span>';
            html += '    </div>';
            html += '  </div>';
            html += '</div>';
        }
        html += '  </div>';
        html += '</div>';
    }
    container.innerHTML = html;
}


// ---------- 语言切换 ----------
function setLanguage(lang) {
    currentLang = lang;
    var t = translations[lang];

    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
        var key = els[i].getAttribute('data-i18n');
        if (t[key]) {
            els[i].textContent = t[key];
        }
    }

    document.getElementById('langLabel').textContent = lang === 'zh' ? '中文 / EN' : 'EN / 中文';

    var heroBio = document.querySelector('[data-i18n="hero.bio"]');
    if (heroBio) heroBio.textContent = t['hero.bio'];

    startTyping(t['hero.bio'] || '');
}

// ---------- 打字机 ----------
function startTyping(text) {
    var el = document.getElementById('typingText');
    if (!el) return;
    if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
    }

    el.textContent = '';
    var index = 0;
    typingInterval = setInterval(function() {
        if (index < text.length) {
            el.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
            typingInterval = null;
        }
    }, 25);
}


// ============================================================
// 暗色模式
// ============================================================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    var icon = document.getElementById('darkIcon');
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'bi bi-sun-fill';
        localStorage.setItem('darkMode', 'true');
    } else {
        icon.className = 'bi bi-moon-fill';
        localStorage.setItem('darkMode', 'false');
    }
}


// ============================================================
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', function() {

    AOS.init({ once: true, offset: 60, duration: 800 });

    renderProjects('all');
    renderExperiences();
    renderAchievements('all');
    setLanguage('zh');

    // 暗色模式
    document.getElementById('darkToggle').addEventListener('click', toggleDarkMode);
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkIcon').className = 'bi bi-sun-fill';
    }

    // 语言切换
    document.getElementById('langToggle').addEventListener('click', function() {
        if (currentLang === 'zh') {
            setLanguage('en');
        } else {
            setLanguage('zh');
        }
    });

    // 项目筛选
    var projectBtns = document.querySelectorAll('#projectFilter .btn');
    for (var i = 0; i < projectBtns.length; i++) {
        projectBtns[i].addEventListener('click', function() {
            var btns = document.querySelectorAll('#projectFilter .btn');
            for (var b = 0; b < btns.length; b++) {
                btns[b].classList.remove('active', 'btn-dark');
                btns[b].classList.add('btn-outline-dark');
            }
            this.classList.remove('btn-outline-dark');
            this.classList.add('active', 'btn-dark');
            renderProjects(this.getAttribute('data-filter'));
            AOS.refresh();
        });
    }

    // 成就筛选
    var achievementBtns = document.querySelectorAll('#achievementFilter .btn');
    for (var i = 0; i < achievementBtns.length; i++) {
        achievementBtns[i].addEventListener('click', function() {
            var btns = document.querySelectorAll('#achievementFilter .btn');
            for (var b = 0; b < btns.length; b++) {
                btns[b].classList.remove('active', 'btn-dark');
                btns[b].classList.add('btn-outline-dark');
            }
            this.classList.remove('btn-outline-dark');
            this.classList.add('active', 'btn-dark');
            renderAchievements(this.getAttribute('data-filter'));
            AOS.refresh();
        });
    }

    // 导航平滑滚动
    var navLinks = document.querySelectorAll('.nav-link');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                var navCollapse = document.getElementById('navMenu');
                if (navCollapse.classList.contains('show')) {
                    navCollapse.classList.remove('show');
                }
            }
        });
    }
});