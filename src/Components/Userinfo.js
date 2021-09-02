import React from 'react'
import propTypes from 'prop-types'

const Userinfo = ({ userinfo }) => {
  return (
    <div className="user-info">
      <img src={userinfo.photo} alt="" />
      <h1 className="username">
        <a href={`https://github.com/${userinfo.login}`}>
          {userinfo.username}
        </a>
      </h1>
    
      <ul className="repos-info">
        <li>Repositórios: {userinfo.repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
   </div>
  )
}

// [Stateful 2] Passamos um shape quando queremos definir qual a tipagem de cada campo de um objeto ou array.
Userinfo.propTypes = {
  userinfo: propTypes.shape({
    username: propTypes.string.isRequired,
    photo: propTypes.string.isRequired,
    login: propTypes.string.isRequired,
    repos: propTypes.number.isRequired,
    followers: propTypes.number.isRequired,
    following: propTypes.number.isRequired
  })
}

export default Userinfo
