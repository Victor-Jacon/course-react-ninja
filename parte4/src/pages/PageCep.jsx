import React from 'react'
import '../index.css'

const PageCep = () => {
  return (
    <div className="page-cep-container">
      <form>
        <input type="text" />
        <button>BUSCAR ENDEREÇO</button>
      </form>

      <table>
        <thead>
          <tr>
            <td>CEP</td>
            <td>Endereço</td>
            <td>Bairro</td>
            <td>Cidade</td>
            <td>Estado</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>06160180</td>
            <td>Rua XPTO</td>
            <td>Paisagem Renoir</td>
            <td>Osasco</td>
            <td>São Paulo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PageCep
