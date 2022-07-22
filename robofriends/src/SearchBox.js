import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className='p2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange} // Use the prop as data
            />
            
        </div>
    );
}

export default SearchBox;