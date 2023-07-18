import React from "react";
import {
	AboutUs,
	Chef,
	FindUs,
	Footer,
	Gallery,
	Header,
	Intro,
	Laurels,
	SpecialMenu,
} from "./containers";
import { NavBar } from "./components";
import "./App.css";

function App() {
	return (
		<div>
			<NavBar />
			<Header />
			<AboutUs />
			<SpecialMenu />
			<Chef />
			<Intro />
			<Laurels />
			<Gallery />
			<FindUs />
			<Footer />
		</div>
	);
}

export default App;
