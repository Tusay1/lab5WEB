import { useEffect, useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/mljjpyap'

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)

  // Через 1 хвилину відкриваємо модальне вікно, якщо його не закривали в цій сесії
  useEffect(() => {
    if (sessionStorage.getItem('feedbackClosed') === 'true') return

    const timer = setTimeout(() => setIsOpen(true), 60000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('feedbackClosed', 'true')
  }

  const field =
    'w-full mb-4 p-2.5 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-2 focus:outline-blue-500'

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl shadow-2xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Зворотний зв'язок</h2>

            <form action={FORMSPREE_URL} method="POST">
              <label htmlFor="cf-name" className="block mb-1 text-sm font-semibold">Ім'я</label>
              <input id="cf-name" name="name" type="text" required className={field} />

              <label htmlFor="cf-email" className="block mb-1 text-sm font-semibold">Email</label>
              <input id="cf-email" name="email" type="email" required className={field} />

              <label htmlFor="cf-phone" className="block mb-1 text-sm font-semibold">Номер телефону</label>
              <input id="cf-phone" name="phone" type="tel" required className={field} />

              <label htmlFor="cf-message" className="block mb-1 text-sm font-semibold">Повідомлення</label>
              <textarea id="cf-message" name="message" rows="4" required className={field} />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                >
                  Закрити
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Надіслати
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactForm