import React from 'react'

function SearchBox({searchChange}) {
    return (
        <div>
            <form className="form-group fg--search">
                <input
                    type="search"
                    placeholder="Buscar por producto" 
                    aria-label="Search"
                    onChange={searchChange}
                 />
                <i className="fas fa-search"></i>
            </form>
        </div>
    )
}

export default SearchBox;