import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillPushpin } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";

const Ingredient = () => {
	const { id } = useParams();
	const [ingredient, setIngredient] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${
						import.meta.env.VITE_APP_ID
					}&app_key=${import.meta.env.VITE_API_KEY}`
				);
				// console.log(response?.data?.recipe);
				setIngredient(response?.data?.recipe);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<div className="w-full">
			<h1 className="text-4xl text-center py-10 text-indigo-600 font-bold">
				{ingredient?.label}
			</h1>

			<div className="w-full px-4 lg:px-20 pt-5">
				<div className="flex gap-10 items-center justify-center px-4">
					<div className="flex flex-col justify-between">
						<span className=" text-center border border-gray-500 py-1 px-4 rounded-full mb-2">
							{ingredient?.calories.toFixed(2)}
						</span>

						<p className=" text-[12px] text-center md:text-md">CALORIES</p>
					</div>

					<div className="flex flex-col justify-center">
						{ingredient?.totalTime ? (
							<>
								<span className=" text-center border border-gray-500 py-1.5 rounded-full mb-2">
									{ingredient?.totalTime} 
								</span>
								<p className=" text-[12px] md:text-md">TOTAL TIME</p>
							</>
						) : null}
					</div>

					<div className="flex flex-col justify-center">
						<span className="text-center border border-gray-500 py-1.5 rounded-full mb-2">
							{ingredient?.yield}
						</span>
						<p className="text-[12px] md:text-md">SERVINGS</p>
					</div>
				</div>

				<div className="w-full flex flex-col md:flex-row gap-8 py-20 px-4 md:px-10">
					{/* LEFT SIDE */}
					<div className="w-full md:w-2/4 md:border-r border-slate-800 pr-1">
						<div className="flex flex-col gap-5">
							<p className="text-green-700 text-2xl underline">INGREDIENTS</p>

							{ingredient?.ingredientLines.map((ingredient) => {
								return (
									<p key={id} className="flex gap-3 items-center">
										<AiFillPushpin className="text-green-800 text-xl" />
										<span className="w-64"> {ingredient}</span>
									</p>
								);
							})}
						</div>
					</div>

					{/* RIGHT SIDE */}
					<div className="flex flex-col items-center gap-3">
						<img src={ingredient?.image} alt="ingredient image" />
						<div className="flex flex-col gap-3">
							<p className="text-green-700 text-2xl underline">HEALTH LABELS</p>
							<div className="flex flex-wrap justify-start gap-4">
								{ingredient?.healthLabels.map((item, index) => (
									<p
										className="flex flex-shrink-0 gap-2 bg-[#fff5f518] items-center px-4 py-1 rounded-full w-44 h-8"
										key={index}>
										<BsPatchCheck color="green" /> {item}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ingredient;
