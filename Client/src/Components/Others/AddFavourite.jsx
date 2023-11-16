import React, { useEffect } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'; //heart icon
import './AddFavourite.css'
import axios from 'axios';

// Toast imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddFavourite = (props) => {
    let userId = "newuser";
    let details = props.details;
    let fvrtDetails = {
        id: details.id,
        first_name : details.user.first_name,
        last_name : details.user.last_name,
        urls: details.urls.full,
        alt_description: details.alt_description,
        username: details.user.username,
        userId: userId
    }


    // Toast ----------------------------------------------------
  const notify = () =>  toast.success('Added to favourite', {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

    const addToFavourite = async() => {
        try {
            await axios.post("http://localhost:5000/backend/addFavourite", fvrtDetails).then((res)=>{
              if(res.data){
                console.log("notify")
              notify();}
            }).catch((err)=>{
              console.log(err.message)
            });
            
          } catch (error) {
            console.log(error.message)
          }
        
        
    }
   
  return (
    <div>
        <button className='favouriteBtn' onClick={addToFavourite}><AiTwotoneHeart className='favouriteBtn-icon'/></button>
        <ToastContainer />
    </div>
  )
}

export default AddFavourite