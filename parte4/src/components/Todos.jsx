import { React, useState} from 'react'
import { useDispatch } from 'react-redux'
import '../index.css'
import { addTodo, removeTodo, toggleTodo } from '../store/modules/shop/actions'

const Todos = ({todos}) => {

  const dispatch = useDispatch()

  // ADDTODO 4
  const [input, setInput] = useState()
  const todo = {
    id: Date.now(), 
    title: input, 
    completed: false
  }

  const handleClickNewTodo = (todo) => {
    dispatch(addTodo(todo))
    setInput('') // ADDTODO 9 [QA]
  }

  const handleToggleTodo = (todo) => dispatch(toggleTodo(todo))
  
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filterDisponiveis = {
    all: (todos) => todos,
    completed: (todos) => todos.completed === true && true,
    open: (todos) => todos.completed === false && true
  }

  return (
    <div>
      <ul>
        {todos
        .filter(filterDisponiveis[activeFilter])
        .map((todo, index) => (
          <div className="task-list">
            <li style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }} key={index}>{todo.title}</li>
            <button onClick={() => dispatch(removeTodo(todo))}>x</button> {/*RMTODO 8*/}
            <input name={index} checked={todo.completed} type="checkbox" onChange={() => handleToggleTodo(todo)} /> {/* TOGGLETODO 5 */}
          </div>
        ))
        }
      </ul>

      <div className="task-status">
        <a onClick={() => setActiveFilter('all')}>Todas</a>
        <a onClick={() => setActiveFilter('open')}>Abertas</a>
        <a onClick={() => setActiveFilter('completed')}>Finalizadas</a>
      </div>
      <div className="action-bar">
        <input value={input} onChange={(e) => setInput(e.target.value)}></input> {/* ADDTODO 5*/}
        <button onClick={() => handleClickNewTodo(todo)}>Adicionar todo</button> {/* ADDTODO 6*/}
      </div>
    </div>
  )
}



export default Todos
