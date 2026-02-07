import React, { useState } from 'react'

interface TodoInputProps {
  onAdd: (text: string, priority: 'low' | 'medium' | 'high') => void
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text.trim(), priority)
      setText('')
      setPriority('medium')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-6 py-4 bg-white border-2 border-secondary-200 rounded-xl focus:outline-none focus:border-primary-500 transition-all duration-300 text-secondary-800 placeholder-secondary-400"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
          className="px-4 py-4 bg-white border-2 border-secondary-200 rounded-xl focus:outline-none focus:border-primary-500 transition-all duration-300 text-secondary-700"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          type="submit"
          className="px-8 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <i className="bi bi-plus-circle text-xl"></i>
          <span className="hidden sm:inline">Add Task</span>
        </button>
      </div>
    </form>
  )
}

export default TodoInput
