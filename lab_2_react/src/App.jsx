import { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

// Денна тема: з 07:00 до 21:00, у решту часу нічна
function getAutoTheme() {
  const hours = new Date().getHours()
  return hours >= 7 && hours < 21 ? 'light' : 'dark'
}

function App() {
  const [theme, setTheme] = useState('light')

  // Автоматичний вибір теми за часом доби при завантаженні
  useEffect(() => {
    setTheme(getAutoTheme())
  }, [])

  // Ручне перемикання
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div
      className={`${theme === 'dark' ? 'dark' : ''} min-h-screen bg-slate-100 dark:bg-slate-900 py-10 px-4 sm:px-6 lg:px-8 text-slate-800 dark:text-slate-100 transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="space-y-6">
          <About />
          <Education />
          <Skills />
          <Experience />
          <Reviews />
        </main>
        <Footer />
      </div>
      <ContactForm />
    </div>
  )
}

export default App