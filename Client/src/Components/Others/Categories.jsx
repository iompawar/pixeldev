import "./Category.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLocation} from "react-router-dom";
import AddFavourite from "./AddFavourite.jsx";



const Categories = () => {
  const [category, setCategory] = useState([]);
  const [slug, setSlug] = useState("");
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const location = useLocation();
  const queryparams =  new URLSearchParams(location.search);
  const user = queryparams.get('user');


  useEffect(() => {

    
    
    axios
      .get("https://api.unsplash.com/topics/?page=1&client_id=cE1CuaZeiXXJhasnoF_QVAyhAuYOyVCwHEZElcZgKJk")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    if(slug)
    {
      loadCategory();  
    }
  }, [page, slug]);

  
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const loadCategory = () => {
    axios
      .get(`https://api.unsplash.com/topics/${slug}/photos?page=${page}&client_id=cE1CuaZeiXXJhasnoF_QVAyhAuYOyVCwHEZElcZgKJk`)
      .then((res) => {
          setData((prevData) => [...prevData, ...res.data]);
          console.log(res.data)
      })
      .catch((err) => {
        console.log("err in category", err.message);
      });
  }; 

  const getSlug =(slug) => {
    setData([]);
    setSlug(slug);
  };

  
  return (
    
    <div className="parent-div">
      <div className="category-div">
        {category.map((ele, index) => {
          return (
            <>
              <NavLink className="category-links" onClick={() => getSlug(ele.slug)}>
                {ele.slug}
              </NavLink>
            </>
          );
        })}
      </div>

      <div className="image-div">
        {data.map((ele) => {
          return (
            <div>
              <img src={ele.urls.regular} alt="" />
              <AddFavourite details={ele}/>
            </div>
          );
        })}
      </div>
      {(data.length > 0) ? <button className="btn btn-success loadmore mt-4" onClick={handleLoadMore}>
        Load More </button> : null}
    </div>
  );
};

export default Categories;
