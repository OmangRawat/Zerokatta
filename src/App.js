import { useState } from 'react';

// CSS
import './App.css';

// Components
import Home from './Components/home';
import PlayerDetails from './Components/playerDetails';
import Grid from './Components/grid';

function App() {
	const [dimension, setDimension] = useState(localStorage.getItem("Dimension") || 3);

	return (
	<div className="App">
		<Home />
		<PlayerDetails setDimension={setDimension}/>
		<Grid dimension={dimension}/>
	</div>
	);
}

export default App;
