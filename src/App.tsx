import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { ToDoList } from './components/ToDoList'
import { ToDoInput } from './components/ToDoInput'
import { useState, useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: false }
  ])

  const [activeTab, setActiveTab] = useState('All')

  function handleAddTodo(newTodo: string) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index: number) {
    const newTodoList = [...todos]
    const completed = todos[index]
    completed['complete'] = true
    newTodoList[index] = completed
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index: number) {
    const newTodoList = todos.filter((_val, valIndex) => {
      return valIndex != index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(todos: { input: string, complete: boolean }[] ){
    localStorage.setItem('todo-app', JSON.stringify({ todos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) return
    const data = localStorage.getItem('todo-app')
    const db = JSON.parse(data!)
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} activeTab={activeTab} setActiveTab={setActiveTab} />
      <ToDoList todos={todos} activeTab={activeTab} deleteTodo={handleDeleteTodo} completeTodo={handleCompleteTodo} />
      <ToDoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
