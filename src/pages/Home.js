import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate() ;

  const handleSearch = () => {
    if (inputValue.trim() === "") return;

    navigate(`/result/${inputValue}`);

  }

  return (
  <>
    <div className='container'>
      <h1>Food Recipe App</h1>
      <div className="input-box">
        <input type="text" placeholder='Search recipe ...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button className='btn' onClick={handleSearch}>Search</button>
      </div>
    </div>
  </>
  )
}

export default Home