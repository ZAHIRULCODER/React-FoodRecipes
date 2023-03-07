import React from "react";

const Header = (props) => {
	const { query, onChange, onClick } = props;

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			onClick();
		}
	};
	return (
		<div className="jumbotrone">
			<h1 className="display-1">
				<span className="material-symbols-outlined brand-icon">fastfood</span>
				Food Recipe
			</h1>
			<div className="input-group">
				<input
					className="form-control"
					onChange={onChange}
					value={query}
					onKeyDown={handleKeyPress}
					type="text"
					placeholder="Search for your favourite recipes"
				/>
				<button className="btn btn-dark" onClick={onClick}>
					Search
				</button>
			</div>
		</div>
	);
};

export default Header;
