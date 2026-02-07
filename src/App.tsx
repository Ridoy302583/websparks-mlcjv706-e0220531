import React, { useEffect } from 'react'
import { useTodos } from './hooks/useTodos'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Stats from './components/Stats'
import { trackTodoPageView, trackTodoAdded, trackTodoCompleted, trackTodoDeleted, trackTodoEdited, identifyAnonymousUser } from './lib/analyticsUsage'

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodos()

  useEffect(() => {
    trackTodoPageView()
    identifyAnonymousUser()
  }, [])

  const handleAddTodo = (text: string, priority: 'low' | 'medium' | 'high') => {
    addTodo(text, priority)
    trackTodoAdded(text, priority)
  }

  const handleToggleTodo = (id: string) => {
    toggleTodo(id)
    trackTodoCompleted(id)
  }

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id)
    trackTodoDeleted(id)
  }

  const handleEditTodo = (id: string, text: string) => {
    editTodo(id, text)
    trackTodoEdited(id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-4 shadow-xl">
            <i className="bi bi-check2-square text-4xl text-white"></i>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary-800 mb-3">
            Task Mastery
          </h1>
          <p className="text-secondary-500 text-lg">
            Organize your day with elegance and efficiency
          </p>
        </header>

        <Stats todos={todos} />
        <TodoInput onAdd={handleAddTodo} />
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />

        <footer className="w-full py-6 text-center text-xs text-secondary-500 border-t border-secondary-200 mt-12">
          Powered by <a href="https://websparks.ai" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline font-medium">WebSparks AI</a>
        </footer>
      </div>
    </div>
  )
}

export default App
