import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Favourite.css';
import { CiCircleRemove } from 'react-icons/ci';

// Toast imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favourite = () => {
  const [favourites, setFavourites] = useState([]);
  let [prevCount, setPrevCount] = useState(0); // Initialize the reload state

  useEffect(() => {
    axios.get("http://localhost:5000/backend/favourites")
      .then((res) => {
        setFavourites(res.data.favourites);
        console.log(res.data.favourites);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [prevCount]);

  // Toast ----------------------------
  const notify = () =>  toast.success('Removed Successfully', {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const removeFromFavourite = (id) => {
    axios.delete(`http://localhost:5000/backend/favourites/${id}`).then((res)=>{
      notify();
      if(res.data){
        setPrevCount(prevCount + 1);
      }
    })
  };

  return (
    <div className='Favourite-comp'>
      <div className='favourite-container'>

     
      {
        favourites.map((ele) => {
          return (
            <div key={ele._id} className="favourite-div">
              <img src={ele.urls} alt="" className='favourite-img' />
              <div className='onHover-details'>
                <h3>{ele.first_name} {ele.last_name}</h3>
                <button className='remove-btn' onClick={() => removeFromFavourite(ele._id)}>
                  <CiCircleRemove className='remove-btn-icon' />
                </button>
              </div>
            </div>
          );
        })
      }
      <ToastContainer/>

      </div>
    </div>
  );
};

export default Favourite;
