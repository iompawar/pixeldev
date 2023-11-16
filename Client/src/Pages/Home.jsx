import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("user");
  return (
    <div>Homecomp {username}</div>
  )
}

export default Home