import React from "react";
import Navbar from "./components/Navbar";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Ingredient from "./components/Ingredient";


const App = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/ingredient/:id",
				element: <Ingredient/>
			}
			
		],
	},
]);

export default App;
