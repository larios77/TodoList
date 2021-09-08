import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Checkbox from '../Checkbox/checkbox'
import './Form.scss'

function TodoApp({ input, setInput, todos, setTodos }) {
  const onInputChange = event => {
    setInput(event.target.value)
  }

  const onFormSubmit = event => {
    event.preventDefault()
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
    setInput('')
  }

  return (
    <div>
      <div className="container__todo">
        <div className="container__todo-list">
          <form className="content__todo-add" onSubmit={onFormSubmit}>
            <Checkbox />
            <input
              type="text"
              className="input__add"
              placeholder="Create a new todo..."
              value={input}
              onChange={onInputChange}
              required
            />
          </form>
        </div>
      </div>
    </div>
  )
}
export default TodoApp
