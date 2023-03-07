import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";

const App = () => {
	const [query, setQuery] = useState("");
	const [recipes, setRecipes] = useState([]);

	const url = `https://edamam-recipe-search.p.rapidapi.com/search`;

	useEffect(() => {
		if (query !== "") {
			getRecipes();
		}
	}, []);

	const getRecipes = async () => {
		const options = {
			url: url,
			params: { q: query },
			headers: {
				"X-RapidAPI-Key": "41aeb95422msh4e2584159a2d3e9p1adbd4jsncad5802b0212",
				"X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
			},
		};
		const response = await Axios.get(url, options);
		setRecipes(response.data.hits);
	};

	const onChange = (e) => {
		setQuery(e.target.value);
	};

	const onClick = () => {
		getRecipes();
		setQuery("");
	};

	return (
		<div className="App">
			<Header onChange={onChange} query={query} onClick={onClick} />
			<div className="container">
				<Recipes recipes={recipes} />
			</div>
		</div>
	);
};

export default App;
