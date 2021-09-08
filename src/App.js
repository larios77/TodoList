import React, { useState } from 'react'
import Form from './components/FormList/Form'
import TodoList from './components/TodoList/todoList'
import TodoHeader from './components/HeaderTodo/todoHeader'
import DarkMode from './components/DarkMode/DarkMode'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <TodoHeader />
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={darkMode ? 'dark' : 'light'}>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <p className="footer">Drag and drop to reorder list</p>
    </div>
  )
}

export default App
