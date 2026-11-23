function Header({ theme, onToggleTheme }) {
  return (
    <header className="bg-slate-900 dark:bg-slate-950 text-white p-8 rounded-2xl shadow-xl border-b-4 border-blue-500 text-left">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-blue-400">
            Артур Любченко
          </h1>
          <p className="text-lg font-medium text-slate-300">
            Студент / Trainee SOC Analyst / Мережева безпека
          </p>
        </div>
        <button
          type="button"
          onClick={onToggleTheme}
          className="px-4 py-2 rounded-lg border border-blue-400 text-sm font-semibold hover:bg-blue-500 hover:scale-105 transition cursor-pointer"
        >
          {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
        </button>
      </div>
      <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-400">
        <span>📍 Львів, Україна</span>
        <span>📞 <a href="tel:+380961234567" className="hover:text-blue-400 transition-colors">+38 (096) 123-45-67</a></span>
        <span>✉️ <a href="mailto:artur.liubchenko.kb.2025@lpnu.ua" className="hover:text-blue-400 transition-colors">artur.liubchenko.kb.2025@lpnu.ua</a></span>
        <span>🔗 <a href="https://github.com/Tusay1" target="_blank" rel="noreferrer" className="hover:text-blue-400 underline decoration-blue-500">GitHub</a></span>
      </div>
    </header>
  )
}

export default Header