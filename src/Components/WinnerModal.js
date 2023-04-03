import React from "react";

import Balloon from "../Assets/Resources/balloon.svg";

const WinnerModal = (props) => {
	
	function startNewGame() {
		props.closeModal("lose");
		props.newgame({});
		props.restart(1)
		localStorage.remove("Dimension");
		localStorage.remove("Player1");
		localStorage.remove("Player2");
	}

	function playAgain() {
		props.closeModal("lose");
		props.newgame({});
		props.restart(1)
	}

	return (
		<div className="winnermodal">
			{props.result === "win"
				? (JSON.parse(localStorage.getItem("Player" + props.player)).name + " Won !!")
				: "Draw"
			}
		<div className="backimg">
			<img src={Balloon} alt="" />
			<img src={Balloon} alt="" />
			<img src={Balloon} alt="" />
			<img src={Balloon} alt="" />
			<img src={Balloon} alt="" />
			<img src={Balloon} alt="" />
		</div>
		<div className="modalButtons">
			<button onClick={playAgain} className="letsStart">
			Play Again
			</button>
			<a href="#playerDetails">
			<button onClick={startNewGame} className="letsStart">
				New Game
			</button>
			</a>
		</div>
		</div>
	);
};

export default WinnerModal;
