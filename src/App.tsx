//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { ToDoList } from './components/ToDoList'
import { ToDoInput } from './components/ToDoInput'

function App() {
  return (
    <>
      <Header />
      <Tabs />
      <ToDoList />
      <ToDoInput />
    </>
  )
}

export default App
