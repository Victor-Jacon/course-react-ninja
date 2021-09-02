import React, { Component } from 'react'
import propTypes from 'prop-types'

import Actions from './Actions';
import Search from './Search';
import Userinfo from './Userinfo';
import Repos from './Repos'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getFavorites }) => {
  return (
    <>
      <Search handleSearch={handleSearch}/>
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
  starred: propTypes.array.isRequired
}

export default AppContent

