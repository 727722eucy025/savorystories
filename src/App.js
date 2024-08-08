// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import AdminLogin from './Components/AdminLogin';
// import AddRecipe from './Components/AddRecipe';
import Home from './Components/Home';
import RecipeList from './Components/RecipeList';
import RecipeDetail from './Components/RecipeDetail';
// import Login from './Login'
import './App.css';
import Addrecipe from './Components/AddRecipe';

const App = () => {
  const [recipes, setRecipes] = useState([
    { id: '1', name: 'Pancakes', description: 'Fluffy pancakes', image: './images/maincourse.jpg', category: 'MAINCOURSE' },
    { id: '2', name: 'Caesar Salad', description: 'Fresh salad', image: '/images/salad.jpg', category: 'SALAD' },
    { id: '3', name: 'Russian Nepolean Cake', description: 'Delicious chocolate cake', image: '/images/cake.jpg', category: 'BAKED' },
    { id: '4', name: 'Spaghetti Bolognese', description: 'Classic Italian dish', image: '/images/spaghetti.jpg', category: 'SIDEDISH' },
    { id: '5', name: 'Quiche', description: 'Savory pie', image: '/images/quiche.jpg', category: 'BEVERAGES' },
  ]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setIsEditing(false);
  };

  const editRecipe = (recipe) => {
    setIsEditing(true);
    setSelectedRecipe(recipe);
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes(recipes.map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe)));
    setIsEditing(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={
            <Home 
              recipes={recipes} 
              selectRecipe={selectRecipe} 
              editRecipe={editRecipe} 
              isEditing={isEditing} 
              selectedRecipe={selectedRecipe} 
              addRecipe={addRecipe} 
              updateRecipe={updateRecipe} 
            />} 
          />
          <Route path='/RecipeList' element={<RecipeList recipes={recipes} />} />
          <Route path='/Addrecipe' element={<Addrecipe />} />
          <Route path='/Login' element={<Login/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/RecipeDetail' element={<RecipeDetail/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
