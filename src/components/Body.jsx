import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import RecipeItemCard from "./RecipeItemCard";
import RecipeContext from "../context/Context";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
	const { recipes, setRecipes, query } = useContext(RecipeContext);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${
						import.meta.env.VITE_APP_ID
					}&app_key=${import.meta.env.VITE_API_KEY}&imageSize=REGULAR`
				);
				// console.log(response?.data?.hits);
				setRecipes(response?.data?.hits);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [query]);

	return recipes.length === 0 ? (
		<ShimmerUI />
	) : (
		<div className="flex flex-wrap justify-center">
			{recipes.map((recipe) => {
				const url = new URL(recipe._links.self.href);
				const id = url.pathname.split("/").pop();

				return (
					<Link to={`/ingredient/${id}`} key={id}>
						{/* spread operator passes all the properties of the object */}
						<RecipeItemCard {...recipe?.recipe} />
					</Link>
				);
			})}
		</div>
	);
};

export default Body;
