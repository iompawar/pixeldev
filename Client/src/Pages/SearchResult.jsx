import React, { useEffect, useState } from 'react';
import './SearchResult.css';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import AddFavourite from '../Components/Others/AddFavourite.jsx';
const SearchResult = () => {
    let [newData, setNewData] = useState([]);
    const [queryResult, setQueryResult] = useState([])
    const {query} = useParams();
    let [pageCount, setPageCount] = useState(1)

    let handleLoadMore = () => {
        setPageCount(++pageCount)
        window.scrollTo(10,20) // scroll page to the top 
    }
    
    useEffect(()=>{

        axios.get(`https://api.unsplash.com/search/photos?page=${pageCount}&query=${query}&client_id=cE1CuaZeiXXJhasnoF_QVAyhAuYOyVCwHEZElcZgKJk`).then((res) => {
            setQueryResult(res.data.results)
            console.log(res.data.results)
        }).catch((err)=>{
            console.log(err.message);
        })
    }, [query, pageCount])


   
  return (
    <div className='SearchResult-comp'>
        <h2>Results related to <span className='query-txt'>{query}</span></h2>
        
        <div className='result-image-div'>
            {queryResult.map((ele)=>{
                return <>
                <div>
                    <img src={ele.urls.small_s3} alt="" className='result-image'/>
                    <AddFavourite details={ele}/>
                </div>
                
                </>
            })}
        </div>

        <button className='btn btn-success' onClick={handleLoadMore}>Load More</button>
    </div>
  )
}

export default SearchResult