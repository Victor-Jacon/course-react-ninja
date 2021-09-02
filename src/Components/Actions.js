import React from 'react'
import propTypes from 'prop-types'

const Actions = ({ getRepos, getFavorites }) => {
  return (
    <>
      <div className="actions">
        <button onClick={getRepos}>Ver repositórios</button>
        <button onClick={getFavorites}>Ver favoritos</button>
      </div>
    </>
  )
}

Actions.propTypes = {
  getRepos: propTypes.func,
  getFavorites: propTypes.func
}

export default Actions
