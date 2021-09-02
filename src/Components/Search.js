import React from 'react'
import ajax from '@fdaciuk/ajax'
import '../index.css'


const Search = () => {
  return (
    <div className="search">

      {/* [Teclado 1] Para saber qual o código de cada tecla do teclado: Basta passar o código e.which ou e.keyCode e salva ele numa variável. Depois mostrar ele na tela com console.log */}
      <input type="search" placeholder="Digite o nome do usuário no github"
        onKeyUp={(e) => {
          const value = e.target.value
          const keyCode = e.which || e.keyCode
          const ENTER = 13
          if (keyCode === ENTER) {
            ajax().get(`https://api.github.com/users/${value}`)
            .then((result) => {
              console.log(result)
            })
          }
          console.log(keyCode)
        }}
      />
    </div>
  )
}

export default Search
