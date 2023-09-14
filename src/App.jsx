// import React from 'react'
import axios from "axios"

import { useEffect } from "react"

const App = () => {
 const fetchData= async() => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGJjYzc3MDUzMjg0YjRmNDY2NGIyOTJjNjM4NWQxZSIsInN1YiI6IjY1MDM0MTVkNmEyMjI3MDBmZDIxYWM2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5N4LeMaVNMxVnZ5juLA6yJ4of-_hgxeDGvx5mDIdj_k'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/20440159', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }
  useEffect(()=>fetchData()
  ,[])
  return (
    <div>App</div>
  )
}

export default App