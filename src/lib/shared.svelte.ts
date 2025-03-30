import type { Todo } from "../types"

export const todos = $state<Todo[]>([])

export const initializeTodos = () => {
  const cached = localStorage.getItem("todos")

  if(cached) {
    todos.splice(0, todos.length, ...JSON.parse(cached))
  }
}

export const addTodo = (newTodo: Todo) => {
  todos?.unshift(newTodo)

  localStorage.setItem("todos", JSON.stringify(todos))
}

export const removeTodo = (todoId: number) => {
  const idx = todos.findIndex(task => task.id === todoId)

  if(idx !== -1) {
    todos.splice(idx, 1);
    localStorage.setItem("todos", JSON.stringify(todos))
  }
}

export const toggleTodo = (todoId: number) => {
  const idx = todos.findIndex(task => task.id === todoId)

  if(idx !== -1) {
    todos[idx].completed = !todos[idx].completed
    localStorage.setItem("todos", JSON.stringify(todos))
  }
}

export const deleteCompletedTodos = () => {
  const completedTodos = todos.filter(todo => todo.completed)

  completedTodos.forEach(todo => removeTodo(todo.id))
  localStorage.setItem("todos", JSON.stringify(todos))
}