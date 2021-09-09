import React, { useState } from 'react'
import Form from './components/FormList/Form'
import TodoList from './components/TodoList/todoList'
import TodoHeader from './components/HeaderTodo/todoHeader'
import DarkMode from './components/DarkMode/DarkMode'
import './App.scss'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <TodoHeader />
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container__form-todo">
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default App
