import React from "react";

const ShimmerUI = () => {
	return (
		<div className="flex flex-wrap justify-center">
			{Array.from({ length: 8 }).map((_, index) => (    //dont want to give first parameter a name so we use underscore
				<div
					key={index}
					className="w-[280px] h-[340px] m-5 bg-[#ccc] p-4  rounded-lg"></div>
			))}

		</div>
	);
};

export default ShimmerUI;
