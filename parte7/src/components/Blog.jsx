import React from 'react'
import { Route, Link } from 'react-router-dom'
import NavigationLinks from '../NavigationLinks'

const Blog = () => {
  return (
    <>
      <div>
        <h1>Blog Page</h1>
        <NavigationLinks />
      </div>
      <div>
        <>
          <li><Link to='/blog/post-1'>Post 1</Link></li>
          <li><Link to='/blog/post-2'>Post 2</Link></li>
        </>

        {/* Dessa forma as rotas são estáticas <>
          <Route path='/blog/post-1' component={Post}/>
          <Route path='/blog/post-2' component={Post}/>
        </> */}

        <>
          <Route path='/blog/:post' component={Post}/>
          <Route exact path='/blog' component={NoPosts}/>
        </>
      </div>
    </>
  )
}

const Post = (props) => {
  return (
    <div>
      <h2>Post: {props.match.params.post}</h2>
    </div>
  )
}

const NoPosts = () => (
  <div>
    <p>Selecione um Post para Ler</p>
  </div>
)

export default Blog
