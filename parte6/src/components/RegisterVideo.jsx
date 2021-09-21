import React from 'react'
import styled from 'styled-components'

const RegisterVideo = () => {
  return (
    <Form>
      <h2>Cadastrar vídeo</h2>

      <label htmlFor="id">Id do vídeo:</label>
      <Input type="text" id='id' name='id'/>

      <label htmlFor="title">Título do vídeo</label>
      <Input type="text" id='title' name='title'/>

      <Button type='submit'>Cadastrar</Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 8px;
  padding: 16px;
`

const Input = styled.input`
  border-radius: 10px;
  padding: 10px;
  outline: none;
`

const Button = styled.button`
  border-radius: 10px;
  width: 205px;
  padding: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  background-color: orange;
  margin-top: 8px;

  &:hover {
    transform: scale(1.05);
    background-color: #ce8600;
  }
`

export default RegisterVideo
