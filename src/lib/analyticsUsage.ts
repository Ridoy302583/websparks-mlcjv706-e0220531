import { trackPageView, trackEvent, identifyUser } from '../../analytics'
import { ANALYTICS_CONFIG } from '../ownanalyticsconfig'

export const trackTodoPageView = () => {
  trackPageView('Todo App Page', {
    page_name: 'todo_app',
    page_url: window.location.href,
    timestamp: Date.now()
  }).catch(() => {})
}

export const trackTodoAdded = (todoText: string, priority: string) => {
  trackEvent('todo_added', {
    todo_text: todoText,
    priority: priority,
    timestamp: Date.now()
  }).catch(() => {})
}

export const trackTodoCompleted = (todoId: string) => {
  trackEvent('todo_completed', {
    todo_id: todoId,
    timestamp: Date.now()
  }).catch(() => {})
}

export const trackTodoDeleted = (todoId: string) => {
  trackEvent('todo_deleted', {
    todo_id: todoId,
    timestamp: Date.now()
  }).catch(() => {})
}

export const trackTodoEdited = (todoId: string) => {
  trackEvent('todo_edited', {
    todo_id: todoId,
    timestamp: Date.now()
  }).catch(() => {})
}

export const identifyAnonymousUser = () => {
  const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  identifyUser(ANALYTICS_CONFIG.VITE_ANALYTICS_USER_ID.toString(), {
    distinctId: sessionId,
    userType: 'anonymous',
    visitTime: Date.now(),
    page_url: window.location.href
  }).catch(() => {})
}
