import { createContext, useState } from "react";

const RecipeContext = createContext();
export default RecipeContext;

export const RecipeProvider = ({ children }) => {
	const [recipes, setRecipes] = useState([]);
	const [query, setQuery] = useState();

	return (
		<RecipeContext.Provider value={{ recipes, setRecipes, query, setQuery }}>
			{children}
		</RecipeContext.Provider>
	);
};
