import { React, useEffect, useState } from 'react'
import axios from 'axios'
import '../index.css'


const PageCep = () => {

  const [cepApi, setCepApi] = useState({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1
  })
  const [input, setInput] = useState('')
  const [itemBuscar, setItemBuscar] = useState('06233-030')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const cep = e.target.cep.value
    console.log(e.target.cep.value)
    const response = axios(`https://ws.apicep.com/cep.json?code=${cep}`)
    .then((response) => {
      console.log(response.data)
      setCepApi(response.data)
    })
    .catch((error) => {
      alert("Ocorreu um erro ao buscar os itens")
    })
  }

  return (
    <div className="page-cep-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name= 'cep' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="submit">BUSCAR ENDEREÇO</button>
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
            <td>{cepApi.code}</td>
            <td>{cepApi.address}</td>
            <td>{cepApi.district}</td>
            <td>{cepApi.city}</td>
            <td>{cepApi.state}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PageCep
