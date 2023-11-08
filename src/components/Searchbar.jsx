import React, { useContext, useState } from "react";
import RecipeContext from "../context/Context";

const Searchbar = () => {
	const { setQuery } = useContext(RecipeContext);
	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		e.preventDefault;
		setQuery(search);
		setSearch("");
	};

	return (
		<div className="flex items-center">
			<input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search recipes Like: Chicken, Pasta, etc."
				className="p-2 rounded-l-md focus:outline-none w-48 md:w-64 lg:w-96"
			/>
			<button
				onClick={handleSearch}
				className="bg-black text-white p-2 md:w-24  rounded-r-md hover:bg-slate-600 hover:text-white transition duration-300">
				Search
			</button>
		</div>
	);
};

export default Searchbar;
