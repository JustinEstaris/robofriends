import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className='p2'>
            <input
                className='ma4 pa3  ba b--green bg-lightest-blue tl'
                type='search'
                placeholder='Search Robots'
                onChange={searchChange} // Use the prop as data
            />

        </div>
    );
}

export default SearchBox;