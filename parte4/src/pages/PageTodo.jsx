import React from 'react'
import { useSelector } from 'react-redux'
import Todos from '../components/Todos';

const PageTodo = () => {
  
  const { todos } = useSelector((state) => state.shop);

  return (
    <>
      <div>
        <h1>Lista de tarefas com redux</h1>
      </div>

      <Todos todos={todos} />
    </>
  )
}

export default PageTodo
