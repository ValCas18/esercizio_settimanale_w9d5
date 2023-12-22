import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import ActionBar from "./components/ActionBar";

import Footer from "./components/Footer";
import FirstGallery from "./components/FirstGallery";
import SecondGallery from "./components/SecondGallery";
import ThirdGallery from "./components/ThirdGallery";

function App() {
	return (
		<div className="App">
			<Container fluid className="px-3">
				<TopBar />
				<ActionBar />
				<FirstGallery title="batman" />
				<SecondGallery title="lord%20of%20the%20rings" />
				<ThirdGallery title="star%20wars" />
			</Container>
			<Footer />
		</div>
	);
}

export default App;
