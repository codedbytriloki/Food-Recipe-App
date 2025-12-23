import React, { useEffect, useState } from 'react'
import { useParams ,Link} from 'react-router-dom'

const SearchResult = () => {

  const {inputValue} = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
      const data = await res.json();
      setRecipes(data.meals || []);
    }
    fetchData();
  },[inputValue]);
  
  
  return (
    <>
    <div className="cotent">
      <h1>Search Results for : {inputValue}</h1>
      <div className='recipe-images'>
      {
        recipes.length === 0 ? (
          <p>No Result Found</p>
        ) :(
          recipes.map((recipe) => (
            // console.log(recipe);
          <div key={recipes.idMeal} id='recipe-image'>
            <img src={recipe.strMealThumb} alt="" />
            <p>{recipe.strMeal}</p>
            <Link to={`/recipe/${recipe.idMeal}`} ><button className='btn'>View Recipe</button></Link>
          </div>
          
          ))
        )
      }
      </div>
      <Link to={'/'}><button className='btn'>Back</button></Link>
    </div>
  </>
  )
}

export default SearchResult