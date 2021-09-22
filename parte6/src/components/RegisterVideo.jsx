import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { addVideo } from '../store/modules/shop/actions';

const RegisterVideo = () => {

  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.shop);

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

  return (
    <Form onSubmit={onSubmit}>
      <h2>Cadastrar vídeo</h2>

      <label htmlFor="id">ID</label>
      <Input type="text" id='id' name='id'/>

      <label htmlFor="title">Título</label>
      <Input type="text" id='title' name='title'/>

      <label htmlFor="url">URL</label>
      <Input type="text" id='url' name='url'/>

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
