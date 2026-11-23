function Experience() {
  return (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 text-left">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-4">
        Практичний досвід та проєкти
      </h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4 py-1">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Моделювання та сегментація мереж</h3>
          <span className="inline-block text-xs font-semibold px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded mt-1">Лабораторна практика</span>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 text-sm mt-2 space-y-1">
            <li>Спроєктував топологію локальної мережі в Cisco Packet Tracer.</li>
            <li>Аналізував передачу пакетів у середовищі Wireshark.</li>
          </ul>
        </div>
        <div className="border-l-4 border-emerald-500 pl-4 py-1">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Автоматизація та утиліти</h3>
          <span className="inline-block text-xs font-semibold px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded mt-1">Особисті проєкти</span>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 text-sm mt-2 space-y-1">
            <li>Розробка скриптів мовою Python для автоматизації задач.</li>
            <li>Розгортання сервісів у контейнеризованих середовищах.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience