import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { addVideo, createVideo, closeForm } from '../store/modules/shop/actions';

const RegisterVideo = () => {

  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.shop);
  const { isFormOpen } = useSelector((state) => state.shop)

  /*
  const onSubmit = (e) => {
    e.preventDefault()

    const { id, title, url } = e.target

    const newVideo = {
      id: id.value,
      title: title.value,
      url: url.value
    }

    console.log(newVideo)

    dispatch(addVideo(newVideo))
  }
  */

  const sendVideoToSaga = (e) => {
    e.preventDefault()
    e.persist()

    const { id, title, url } = e.target

    const videoToCreate = {
      id: id.value,
      title: title.value,
      url: url.value
    }

    console.log('sendVideoToSaga'); console.log(videoToCreate)

    dispatch(createVideo(videoToCreate))
    e.target.reset() // Limpa o formulário

    // e.target.id.focus() // Depois de enviar, traz o foco de volta para o campo id. A ideia na realidade é fazer o primeiro campo pegar o focus. Porque pode ser que o ID não seja o primeiro campo. Então a gente precisa garantir que seja sempre o primeiro campo do formulário que receba o focus.
    e.target[0].focus() // Dessa forma garantimos que o focus será aplicado no primeiro campo do formulário ,sempre.
  }

  return (
    <Form onSubmit={sendVideoToSaga}>
      <h2>Cadastrar vídeo</h2>

      <label htmlFor="id">ID</label>
      <Input type="text" id='id' name='id'/>

      <label htmlFor="title">Título</label>
      <Input type="text" id='title' name='title'/>

      <label htmlFor="url">URL</label>
      <Input type="text" id='url' name='url'/>

      <Button type='submit'>Cadastrar</Button>
      <ButtonClose type='button' onClick={() => dispatch(closeForm())}>&times;</ButtonClose>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 8px;
  padding: 16px;

  position: relative;
`

const ButtonClose = styled.button`
  right: 10px;
  top: 10px;

  width: 32px;
  height: 32px;
  border-radius: 50%;
  
  outline: none;
  border: none;
  background-color: #fc9c9c;
  color: white;
  font-size: 24px;
  cursor: pointer;

  position: absolute;

  &:hover {
    background-color: #fd7d7d;
  }
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
