import React from 'react'
import { Todo } from '../types/todo'

interface StatsProps {
  todos: Todo[]
}

const Stats: React.FC<StatsProps> = ({ todos }) => {
  const total = todos.length
  const completed = todos.filter(t => t.completed).length
  const pending = total - completed

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-primary-100 text-sm font-medium">Total Tasks</p>
            <p className="text-3xl font-bold mt-1">{total}</p>
          </div>
          <i className="bi bi-list-task text-4xl opacity-50"></i>
        </div>
      </div>

      <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-accent-100 text-sm font-medium">Completed</p>
            <p className="text-3xl font-bold mt-1">{completed}</p>
          </div>
          <i className="bi bi-check-circle text-4xl opacity-50"></i>
        </div>
      </div>

      <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-secondary-100 text-sm font-medium">Pending</p>
            <p className="text-3xl font-bold mt-1">{pending}</p>
          </div>
          <i className="bi bi-clock-history text-4xl opacity-50"></i>
        </div>
      </div>
    </div>
  )
}

export default Stats
