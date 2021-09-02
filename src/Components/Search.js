import React from 'react'
import ajax from '@fdaciuk/ajax'
import '../index.css'
import propTypes from 'prop-types'


const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <input type="search" placeholder="Digite o nome do usuário no github"
        onKeyUp={handleSearch}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearch: propTypes.func.isRequired
}

export default Search
