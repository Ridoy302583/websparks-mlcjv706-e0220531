import React, { useState } from 'react'
import { Todo } from '../types/todo'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, text: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim())
    }
    setIsEditing(false)
  }

  const priorityColors = {
    low: 'bg-accent-100 text-accent-700 border-accent-300',
    medium: 'bg-primary-100 text-primary-700 border-primary-300',
    high: 'bg-red-100 text-red-700 border-red-300'
  }

  return (
    <div className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-secondary-100 hover:border-primary-300">
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggle(todo.id)}
          className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary-500 flex items-center justify-center hover:bg-primary-50 transition-all duration-300"
        >
          {todo.completed && (
            <i className="bi bi-check-lg text-primary-500 text-sm font-bold"></i>
          )}
        </button>

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
            className="flex-1 px-3 py-2 border-2 border-primary-300 rounded-lg focus:outline-none focus:border-primary-500"
            autoFocus
          />
        ) : (
          <span className={`flex-1 text-secondary-800 ${todo.completed ? 'line-through text-secondary-400' : ''}`}>
            {todo.text}
          </span>
        )}

        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${priorityColors[todo.priority]}`}>
          {todo.priority}
        </span>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 text-primary-500 hover:bg-primary-50 rounded-lg transition-all duration-300"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
