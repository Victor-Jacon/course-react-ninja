import React from 'react'
import ajax from '@fdaciuk/ajax'
import '../index.css'
import propTypes from 'prop-types'


const Search = ({ isDisabled, handleSearch }) => {
  return (
    <div className="search">
      {/*[Fetching] A prop disabled é padrão. Disabled determina se o campo está desabilitado ou não. Disabled espera um valor bool. Vamos passar por prop drillng o valor de isDisabled que será true/false. */}
      <input 
        disabled={isDisabled}
        type="search" 
        placeholder="Digite o nome do usuário no github"
        onKeyUp={handleSearch}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearch: propTypes.func.isRequired,
  isDisabled: propTypes.bool.isRequired
}

export default Search
