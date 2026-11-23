import { useEffect, useState } from 'react'

function Footer() {
  const [storage, setStorage] = useState({})

  // При монтуванні зберігаємо дані про систему в localStorage та зчитуємо їх назад
  useEffect(() => {
    try {
      localStorage.setItem('userAgent', navigator.userAgent)
      localStorage.setItem('platform', navigator.platform)

      const all = {}
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        all[key] = localStorage.getItem(key)
      }
      setStorage(all)
    } catch (error) {
      console.error('localStorage недоступний:', error)
    }
  }, [])

  return (
    <footer className="text-center py-6 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 mt-8">
      <p>&copy; 2026 Артур Любченко. Резюме стилізовано за допомогою Tailwind CSS v4.</p>

      <h3 className="mt-4 font-semibold text-slate-600 dark:text-slate-300">
        Інформація про систему (localStorage)
      </h3>
      <ul className="mt-2 space-y-1 text-left text-xs break-all">
        {Object.entries(storage).map(([key, value]) => (
          <li key={key} className="border-b border-dashed border-slate-300 dark:border-slate-700 py-1">
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer