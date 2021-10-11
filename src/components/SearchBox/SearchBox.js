import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className="header_search">
                <input className='header_searchInput' type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
    );
};

export default SearchBox;