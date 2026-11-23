function Skills() {
  return (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 text-left">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-4">
        Технічні навички
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-slate-700 dark:text-slate-200 mb-1">🌐 Мережеві інструменти</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">Wireshark, Nmap, Cisco Packet Tracer, модель OSI/TCP-IP</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-slate-700 dark:text-slate-200 mb-1">💻 Мови програмування</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">Python, C#</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-slate-700 dark:text-slate-200 mb-1">🐧 ОС та Інфраструктура</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">Linux (Ubuntu, Arch Linux), Windows, Git, Docker, Podman</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-slate-700 dark:text-slate-200 mb-1">🛡️ Стандарти</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">Основи ISO/IEC 27001, базовий аудит безпеки</p>
        </div>
      </div>
    </section>
  )
}

export default Skills