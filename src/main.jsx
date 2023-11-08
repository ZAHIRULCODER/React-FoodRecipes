import React from "react";
import ReactDOM from "react-dom/client";
import { appRouter } from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { RecipeProvider } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<RecipeProvider>
		<RouterProvider router={appRouter} />
	</RecipeProvider>
);
