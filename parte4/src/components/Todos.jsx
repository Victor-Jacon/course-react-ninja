import { React, useState} from 'react'
import { useDispatch } from 'react-redux'
import '../index.css'
import { addTodo, removeTodo, toggleTodo } from '../store/modules/shop/actions'
import { TaskStatus, TaskName } from './StyledComponents'

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
            {/* Styled-A2 - Passamos a props taskCompleted que nosso styled componentes está aguardando */}
            <TaskName href="#" taskCompleted={todo.completed} key={index}>{todo.title}</TaskName>
            <button onClick={() => dispatch(removeTodo(todo))}>x</button> {/*RMTODO 8*/}
            <input name={index} checked={todo.completed} type="checkbox" onChange={() => handleToggleTodo(todo)} /> {/* TOGGLETODO 5 */}
          </div>
        ))
        }
      </ul>

      <div className="task-status">
        <TaskStatus onClick={() => setActiveFilter('all')} activeFilter={activeFilter.includes('all')}>Todas</TaskStatus>
        <TaskStatus onClick={() => setActiveFilter('open')} activeFilter={activeFilter.includes('open')}>Abertas</TaskStatus>
        <TaskStatus onClick={() => setActiveFilter('completed')} activeFilter={activeFilter.includes('completed')}>Finalizadas</TaskStatus>
      </div>
      <div className="action-bar">
        <input value={input} onChange={(e) => setInput(e.target.value)}></input> {/* ADDTODO 5*/}
        <button onClick={() => handleClickNewTodo(todo)}>Adicionar todo</button> {/* ADDTODO 6*/}
      </div>
    </div>
  )
} 

export default Todos
