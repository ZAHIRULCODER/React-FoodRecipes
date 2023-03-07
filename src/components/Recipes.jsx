import React from "react";
import RecipeItem from "./RecipeItem";
import { v4 as uuidv4 } from "uuid";

const Recipes = (props) => {
	const { recipes } = props;
	// get first 8 items
	const slicedRecipes = recipes.slice(0, 8);
	return (
		<div className="row row-cols-1 row-cols-md-4 py-4">
			{slicedRecipes.map((recipe) => (
				<div className="col mb-4" key={uuidv4()}>
					<RecipeItem
						label={recipe.recipe.label}
						image={recipe.recipe.image}
						ingredientLines={recipe.recipe.ingredientLines}
						cuisineType={recipe.recipe.cuisineType}
					/>
				</div>
			))}
		</div>
	);
};

export default Recipes;
