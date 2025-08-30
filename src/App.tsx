import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { ToDoList } from './components/ToDoList'
import { ToDoInput } from './components/ToDoInput'
import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([
    {input: 'Hello! Add your first todo!', complete: false}
  ])

  const [activeTab, setActiveTab] = useState('All')

  function handleAddTodo(newTodo: string){
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
  }

  function handleCompleteTodo(index: number){
    const newTodoList = [...todos]
    const completed = todos[index]
    completed['complete'] = true
    newTodoList[index] = completed
    setTodos(newTodoList)
  }
  function handleDeleteTodo(index: number){
    const newTodoList = todos.filter((_val, valIndex)=>{
      return valIndex != index
    })
    setTodos(newTodoList)
  }
  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <ToDoList todos={todos} activeTab={activeTab} deleteTodo={handleDeleteTodo} completeTodo={handleCompleteTodo}/>
      <ToDoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
