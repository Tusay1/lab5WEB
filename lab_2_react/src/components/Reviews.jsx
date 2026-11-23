import { useEffect, useState } from 'react'

// Номер варіанта (порядковий номер у журналі групи)
const VARIANT = 16

function Reviews() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Запит до сервера виконується один раз при монтуванні компонента
  useEffect(() => {
    let cancelled = false

    async function loadComments() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`
        )
        if (!response.ok) throw new Error('HTTP ' + response.status)
        const data = await response.json()
        if (!cancelled) setComments(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadComments()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 text-left">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-4">
        Відгуки попередніх роботодавців
      </h2>

      {loading && <p className="text-slate-500 dark:text-slate-400">Завантаження відгуків...</p>}
      {error && <p className="text-red-600">Не вдалося завантажити відгуки: {error}</p>}

      <div className="space-y-3">
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="border-l-4 border-blue-500 bg-slate-50 dark:bg-slate-900 p-4 rounded-lg"
          >
            <h3 className="font-bold text-slate-800 dark:text-slate-100 capitalize">{comment.name}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{comment.email}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews