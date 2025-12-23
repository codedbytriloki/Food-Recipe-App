import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

const RecipeDetails = () => {
  const {id} = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
     const fetchData = async() => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      setRecipe(data.meals[0]);
    }
    fetchData();
  } ,[id]);

  if(!recipe) return <p>Loading ....</p>

  return (
    <>
    <div className="recipe">
      <div className="row">
        <div className="col-1">
          <img src={recipe.strMealThumb} alt="" />
        </div>
        <div className="col-2">
          <h2 className='heading'>Recipe Details</h2>
          <h4>{recipe.strMeal}</h4>
          <h2>Instruction's</h2>
          <p className='para'>{recipe.strInstructions}</p>
          <Link to={'/'}> <button className='btn'>Back</button></Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default RecipeDetails