// =====================================================
// Лабораторна робота №4. JavaScript
// =====================================================

// Номер варіанта (порядковий номер у журналі групи)
const VARIANT = 16;

// ---------------------------------------------------
// 1. Зберігання даних про ОС і браузер у localStorage
// ---------------------------------------------------
function saveSystemInfo() {
    const nav = navigator;
    const info = {
        userAgent: nav.userAgent,
        platform: nav.platform,
        platformUA: nav.userAgentData ? nav.userAgentData.platform : 'недоступно',
        vendor: nav.vendor,
        language: nav.language,
        languages: (nav.languages || []).join(', '),
        cookieEnabled: String(nav.cookieEnabled),
        onLine: String(nav.onLine),
        hardwareConcurrency: String(nav.hardwareConcurrency),
        deviceMemory: nav.deviceMemory ? nav.deviceMemory + ' ГБ' : 'недоступно',
        screenSize: screen.width + 'x' + screen.height,
        colorDepth: String(screen.colorDepth),
        windowSize: window.innerWidth + 'x' + window.innerHeight,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    try {
        for (const [key, value] of Object.entries(info)) {
            localStorage.setItem(key, value);
        }
    } catch (error) {
        console.error('localStorage недоступний:', error);
    }
}

// Відображення всього вмісту localStorage у футері
function renderStorage() {
    const list = document.getElementById('storage-info');
    list.innerHTML = '';

    try {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const item = document.createElement('li');
            const bold = document.createElement('strong');
            bold.textContent = key + ': ';
            item.append(bold, document.createTextNode(localStorage.getItem(key)));
            list.appendChild(item);
        }
    } catch (error) {
        list.textContent = 'localStorage недоступний.';
    }
}

// ---------------------------------------------------
// 2. Відгуки роботодавців із сервера (Fetch API)
// ---------------------------------------------------
async function loadReviews() {
    const container = document.getElementById('reviews-list');
    const url = `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }
        const comments = await response.json();

        container.innerHTML = '';
        // коментарі виводяться в порядку їх отримання
        comments.forEach(function (comment) {
            const card = document.createElement('article');
            card.className = 'review-card';

            const name = document.createElement('h3');
            name.textContent = comment.name;

            const email = document.createElement('p');
            email.className = 'review-email';
            email.textContent = comment.email;

            const body = document.createElement('p');
            body.textContent = comment.body;

            card.append(name, email, body);
            container.appendChild(card);
        });
    } catch (error) {
        container.textContent = 'Не вдалося завантажити відгуки: ' + error.message;
    }
}

// ---------------------------------------------------
// 3. Модальне вікно форми через 1 хвилину
// ---------------------------------------------------
const modal = document.getElementById('modal');
const MODAL_DELAY_MS = 60000;

function openModal() {
    // якщо користувач уже закрив вікно в цій сесії, не показуємо його знову
    if (sessionStorage.getItem('feedbackClosed') === 'true') {
        return;
    }
    modal.hidden = false;
}

function closeModal() {
    modal.hidden = true;
    sessionStorage.setItem('feedbackClosed', 'true');
}

document.getElementById('modal-close').addEventListener('click', closeModal);

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.hidden) {
        closeModal();
    }
});

setTimeout(openModal, MODAL_DELAY_MS);

// ---------------------------------------------------
// 4. Нічний / денний режим
// ---------------------------------------------------
const themeButton = document.getElementById('theme-toggle');
let currentTheme = 'light';
let manualTheme = false;

// Денна тема: з 07:00 до 21:00, у решту часу нічна
function getAutoTheme() {
    const hours = new Date().getHours();
    return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

function applyTheme(theme) {
    currentTheme = theme;
    document.body.classList.toggle('dark-mode', theme === 'dark');
    themeButton.textContent = theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
}

themeButton.addEventListener('click', function () {
    manualTheme = true;
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Автоматичне перемикання за часом доби (перевірка щохвилини, доки тему не змінено вручну)
setInterval(function () {
    if (!manualTheme) {
        const autoTheme = getAutoTheme();
        if (autoTheme !== currentTheme) {
            applyTheme(autoTheme);
        }
    }
}, 60000);

// ---------------------------------------------------
// Запуск
// ---------------------------------------------------
applyTheme(getAutoTheme());
saveSystemInfo();
renderStorage();
loadReviews();