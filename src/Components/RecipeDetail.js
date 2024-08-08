// src/Components/RecipeDetail.js
import React from 'react';
import './RecipeDetail.css';
import img1 from '../images/chococake.jpeg';
import img2 from '../images/salad2.jpeg';
const RecipeDetail = () => {
  // Example recipe data
  const recipes = [
    {
      id: 1,
      name: "Chocolate Cake",
      image: img1, // Replace with the correct path to your image
      description: "A rich and moist chocolate cake with creamy frosting.",
      ingredients: [
        "1 cup flour",
        "1 cup sugar",
        "1/2 cup cocoa powder",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/2 tsp salt",
        "2 eggs",
        "1 cup milk",
        "1/2 cup vegetable oil",
        "1 tsp vanilla extract",
      ],
      instructions: [
        "Preheat the oven to 350°F (175°C).",
        "Grease and flour a 9x9 inch pan.",
        "In a medium bowl, stir together the sugar, flour, cocoa, baking powder, baking soda, and salt.",
        "Add the eggs, milk, oil, and vanilla, and mix for 2 minutes on medium speed of mixer.",
        "Pour into the prepared pan.",
        "Bake for 30 to 35 minutes in the preheated oven.",
        "Let cool in the pan for 10 minutes, then remove to a wire rack to cool completely.",
        "Frost with your favorite frosting."
      ]
    },
    {
      id: 2,
      name: "Caesar Salad",
      image: img2,
      description: "A classic Caesar salad with crispy croutons and Caesar dressing.",
      ingredients: [
        "1 head romaine lettuce",
        "1/2 cup croutons",
        "1/4 cup grated Parmesan cheese",
        "1/2 cup Caesar dressing",
        "1 lemon, juiced",
      ],
      instructions: [
        "Wash and chop the romaine lettuce.",
        "In a large bowl, combine lettuce, croutons, and Parmesan cheese.",
        "Drizzle with Caesar dressing and lemon juice.",
        "Toss well to coat.",
        "Serve immediately."
      ]
    },
    // Add more recipe objects here...
  ];

  return (
    <div className="recipe-list-container">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img
            src={recipe.image || '/default-image.jpg'}
            alt={recipe.name}
            className="recipe-card-image"
          />
          <div className="recipe-card-content">
            <h2 className="recipe-card-title">{recipe.name}</h2>
            <p className="recipe-card-description">{recipe.description}</p>
            <button className="recipe-card-button" >View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeDetail;
