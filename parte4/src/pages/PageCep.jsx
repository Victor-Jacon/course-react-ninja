import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import '../index.css'

// redux
import { addCep } from '../store/modules/shop/actions'


const PageCep = () => {

  const dispatch = useDispatch()

  const { cepApi } = useSelector(state => state.shop) 

  const [input, setInput] = useState('')
  const [isBtnFetching, setIsBtnFetching] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setIsBtnFetching(true)
    const cep = e.target.cep.value
    // console.log(e.target.cep.value)
    const response = axios(`https://ws.apicep.com/cep.json?code=${cep}`)
    .then((response) => {
      // console.log(response.data)
      setTimeout(() => {
        dispatch(addCep(response.data))
        setIsBtnFetching(false)
      }, 1)
    })
    .catch((error) => {
      alert("Ocorreu um erro ao buscar os itens")
    })
  }

  return (
    <div className="page-cep-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name= 'cep' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="submit" disabled={isBtnFetching}>
          {isBtnFetching ? 'Buscando...' : 'Buscar endereço'}
        </button>
      </form>

      { cepApi.status === 200 ? (
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
              <td>{cepApi.code}</td>
              <td>{cepApi.address}</td>
              <td>{cepApi.district}</td>
              <td>{cepApi.city}</td>
              <td>{cepApi.state}</td>
            </tr>
          </tbody>
        </table>
      ) : 'Nada para mostrar :(' }

    </div>
  )
}

export default PageCep
