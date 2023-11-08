import React from "react";

const RecipeItemCard = ({ image, label, cuisineType, mealType }) => {
	// destructuring on the fly form Body

	return (
		<div className="w-[280px] h-[440px] m-5 border border-gray-300 rounded-lg transition-transform transform hover:scale-105">
			<div className="bg-white p-4 rounded-lg">
				<img
					src={image}
					alt="recipe"
					className="w-full h-45 object-cover rounded-t-lg"
				/>
				<div className="p-4">
					<p className="flex justify-between font-medium">
						<span className="shadow-md rounded p-2 bg-indigo-200">
							{cuisineType}
						</span>
						<span className="shadow-md rounded p-2  bg-indigo-200">
							{mealType}
						</span>
					</p>
					<p className="text-lg font-semibold mt-2">{label}</p>
				</div>
			</div>
		</div>
	);
};

export default RecipeItemCard;
