import React, { useState } from "react";

const RecipeItem = (props) => {
	const { label, image, ingredientLines, cuisineType } = props;
	// Add state to track whether the ingredient list is visible or not
	const [showIngredients, setShowIngredients] = useState(false);
	// Handler function to toggle the visibility of the ingredient list
	const handleToggleIngredients = () => {
		setShowIngredients(!showIngredients);
	};

	return (
		<div className="card py-2 text-center">
			<img src={image} alt={label} />
			<div className="card-body">
				<h5 className="card-title">{label}</h5>
				<p className="card-text">
					<strong>Cusine Type</strong>: {cuisineType}{" "}
				</p>
				{/* Render the ingredient list conditionally based on the state */}
				{showIngredients && (
					<ul className="list-group list-group-flush">
						{ingredientLines.map((ingredient) => (
							<li className="list-group-item">{ingredient}</li>
						))}
					</ul>
				)}
				{/* Add a button to toggle the visibility of the ingredient list  */}
				<button type="button" className="btn btn-dark" onClick={handleToggleIngredients}>
					{showIngredients ? "Hide Ingredients" : "View Ingredients"}
				</button>
			</div>
		</div>
	);
};

export default RecipeItem;
