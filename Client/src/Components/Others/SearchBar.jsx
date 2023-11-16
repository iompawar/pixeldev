import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './SearchBar.css'



const SearchBar = () => {
    let [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
    }
    const handleEnterPress = (e) => {
        if(e.key === 'Enter'){
           navigate(`/SearchResult/${searchQuery}`)
           e.target.value = "";
        }
    }
    return (
    <div className='SearchBar-comp'>
        <input type="search" name="searchbar" id="searchbar" placeholder='search image here....' onKeyPress={handleEnterPress} onChange={handleSearch}/>
    </div>
  )
}

export default SearchBar