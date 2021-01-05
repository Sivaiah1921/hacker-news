import React from "react";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/organisms/header";
import Footer from "./components/organisms/footer";

function App() {
	return (
		<Router>
			<Header />
			<Routes />
			<Footer />
		</Router>
	);
}

export default App;
