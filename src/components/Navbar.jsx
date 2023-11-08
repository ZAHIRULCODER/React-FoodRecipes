import React from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
	return (
		<nav className="bg-indigo-400 p-4">
			<div className="container mx-auto flex items-center justify-between ">
				<div className="text-2xl font-semibold text-white">Food Recipes</div>
				<div className="mx-auto">
					<Searchbar />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
