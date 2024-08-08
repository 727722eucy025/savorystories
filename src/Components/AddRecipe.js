// src/components/AddRecipe.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRecipe.css';

function AddRecipe({ addRecipe, navigateTo }) {
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    ingredients: '',
    instructions: '',
  });

  const handleAddrecipe = () => {
    navigate('/Home');
  };
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handlebth = () => {
    navigate("/Home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      ...recipe,
      ingredients: recipe.ingredients.split(','),
      id: Date.now(),
    });
    setRecipe({
      name: '',
      description: '',
      ingredients: '',
      instructions: '',
    });
    navigateTo('recipeList');
  };

  return (
    <div className="add-recipe-container">
      <video autoPlay loop muted className="background-video">
        <source src="/video/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form onSubmit={handleSubmit} className="add-recipe-form">
        <h1>Add Recipe</h1>
        <input
        name="name"
        value={recipe.name}
        onChange={handleChange}
        placeholder="Recipe Name"
        />
        <input
        name="description"
        value={recipe.description}
        onChange={handleChange}
        placeholder="Description"
        />
        <textarea
        name="ingredients"
        value={recipe.ingredients}
        onChange={handleChange}
        placeholder="Ingredients (comma separated)"
        />
        <textarea
        name="instructions"
        value={recipe.instructions}
        onChange={handleChange}
        placeholder="Instructions"
        />
        <button type="submit" onClick={handleAddrecipe}>Add Recipe</button>
        <button type="button" onClick={handlebth} style={{marginLeft: 20}}>Back to Home</button>
        </form>
    </div>
  );
}

export default AddRecipe;
