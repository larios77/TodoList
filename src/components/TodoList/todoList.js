import React from 'react'
import iconCross from '../../images/icon-cross.svg'
import Checkbox from '../Checkbox/checkbox'
import './todoList.scss'

function TodoList({ todos, setTodos }) {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const ActiveCheck = () => {
    document.getElementById('check').click()
  }

  return (
    <>
      <div className="container__todolist">
        {todos.map(todo => (
          <div>
            <li key={todo.id} className="list__todo">
              <div className="todo__add" id="clear">
                <Checkbox id="check" />
                <input
                  type="text"
                  value={todo.title}
                  onChange={event => event.preventDefault()}
                  className="input__todo"
                />
              </div>
              <div>
                <button
                  onClick={() => handleDelete(todo)}
                  className="delete__todo"
                >
                  <img src={iconCross} alt="iconCross" />
                </button>
              </div>
            </li>
          </div>
        ))}
        <div className="todo__list-footer">
          <p>{todos.length} item left</p>
          <p> Clear </p>
        </div>
      </div>
      <div className="footer__list">
        <button onClick={ActiveCheck}>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </>
  )
}
export default TodoList
