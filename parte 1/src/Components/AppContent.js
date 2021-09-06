import React, { Component } from 'react'
import propTypes from 'prop-types'

import Actions from './Actions';
import Search from './Search';
import Userinfo from './Userinfo';
import Repos from './Repos'

const AppContent = ({ userinfo, repos, starred, isFetching, handleSearch, getRepos, getFavorites }) => {
  return (
    <>
      <Search isDisabled={isFetching} handleSearch={handleSearch}/>

      {/* [Fetching] Se fetching for true vai mostrar uma div escrito carregando. Poderia ser uma div com um gif também. */}
      {isFetching && <div>Carregando...</div>}
      
      {/*[Stateful 1] Os !! transformam a props em boolean. Fazemos isso porque no javascript o 0 traria um retorno true e daria render por engano na tela (padrão) */}
      {!!userinfo && <Userinfo userinfo={userinfo}/>}
      {!!userinfo && <Actions getRepos={getRepos} getFavorites={getFavorites}/>}
      {!!repos.length && <Repos className='repos' title='Repositórios'repos={repos}/>}
      {!!starred.length && <Repos className='starred' title='Favoritos'repos={starred}/>}
    </>
  )
}

AppContent.propTypes = {
  userinfo: propTypes.object,
  repos: propTypes.array.isRequired,
  starred: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  handleSearch: propTypes.func.isRequired,
  getRepos: propTypes.func.isRequired,
  getFavorites: propTypes.func.isRequired
}

export default AppContent

