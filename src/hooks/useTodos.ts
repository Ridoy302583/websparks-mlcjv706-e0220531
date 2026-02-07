import { useState, useEffect } from 'react'
import { Todo } from '../types/todo'

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string, priority: 'low' | 'medium' | 'high' = 'medium') => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: Date.now(),
      priority
    }
    setTodos([newTodo, ...todos])
    return newTodo
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: string, text: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text } : todo
    ))
  }

  return { todos, addTodo, toggleTodo, deleteTodo, editTodo }
}
