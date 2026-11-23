# Лабораторна робота №5 — Розгортання вебсайту

Репозиторій містить два проєкти для публікації на Vercel:

| Проєкт | Де лежить | Framework Preset | Root Directory | Build | Output |
|---|---|---|---|---|---|
| Статичний сайт (ЛР4) | корінь (`index.html`, `styles.css`, `script.js`) | Other | `./` | — | — |
| React + Vite + Tailwind (ЛР4) | `lab_2_react/` | Vite | `lab_2_react` | `npm run build` | `dist` |

## Кроки

1. Створити на GitHub публічний репозиторій `web-programming-lab-5` (порожній, без README).
2. З цієї папки:
   ```bash
   git init && git add . && git commit -m "Лабораторна робота 5: вихідний код сайту"
   git branch -M main
   git remote add origin https://github.com/<ваш-логін>/web-programming-lab-5.git
   git push -u origin main
   ```
3. vercel.com → Sign up with GitHub → Add New → Project → Import репозиторію (налаштування з таблиці, рядок 1).
4. Ще раз Add New → Project з того самого репозиторію, Root Directory = `lab_2_react` (рядок 2).
5. Перевірка автооновлення: змінити номер телефону в `index.html`, `git commit`, `git push` — сайт оновиться сам.

## Перед публікацією

- У `index.html` та `lab_2_react/src/components/ContactForm.jsx` замінити `ВАШ_ЕНДПОЙНТ` на свій Formspree endpoint, інакше форма не надсилатиметься.
