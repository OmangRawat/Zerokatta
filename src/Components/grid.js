import React, { useEffect, useState } from "react";

// CSS
import "../Assets/stylesheets/Grid/grid.css";

// Assets
import cross from "../Assets/Resources/cross.svg";
import plus from "../Assets/Resources/plus.svg";

// Utils
import { checkEmptyBox } from "../Utils/checkEmptyBox";
import { checkForWin } from "../Utils/checkForWin";

// Components
import GridBox from "./gridBox";
import WinnerModal from "./WinnerModal";

const Grid = (props) => {
    const dimension = props.dimension || 3;
    const [showGrid, setShowGrid] = useState(false);
    const [gridboxes, setGridboxes] = useState([]);
    const [chance, setChance] = useState(1);
    const [gridvalues, setGridvalues] = useState({});
    const [won, setWon] = useState("lose");
    let winner = 1;

    const rowSizeStyle = {
        gridTemplateRows: "repeat(" + dimension + ", minmax(0, 1fr))",
        gridTemplateColumns: "repeat(" + dimension + ", minmax(0, 1fr))",
    };

    function checkandmark(event) {
        console.log(chance)
        let clickedbox = event.target.id;
        let symbol_for_current_turn = JSON.parse(localStorage.getItem("Player" + chance));

        if (checkEmptyBox(clickedbox)) {
        setGridvalues((value) => {
            return {
            ...value,
            [clickedbox]: symbol_for_current_turn.symbol,
            };
        });
        setChance(chance === 1 ? 2 : 1);
        console.log("After", chance)
        }
        console.log("Outside", chance)
        if (!(checkForWin(gridvalues, clickedbox, symbol_for_current_turn.symbol) === "lose")) {
            setChance(chance === 1 ? 2 : 1);
            winner = chance === 1 ? 2 : 1;
            setWon(checkForWin(gridvalues, clickedbox, symbol_for_current_turn.symbol))
        }
    }

    useEffect(() => {
        function addRowsToGrid() {
            let tempGridBoxes = [];
            for (let i = 0; i < dimension; i++) {
            for (let j = 0; j < dimension; j++) {
                gridvalues["box_" + i + "_" + j] === "cross"
                ? tempGridBoxes.push(
                    <GridBox key={j + "" + i} ele="cross" src={cross} i={i} j={j} />
                    )
                : gridvalues["box_" + i + "_" + j] === "plus"
                ? tempGridBoxes.push(
                    <GridBox key={j + "" + i} ele="plus" src={plus} i={i} j={j} />
                    )
                : tempGridBoxes.push(
                    <GridBox key={j + "" + i} ele="" i={i} j={j} />
                    );
            }
            }
            setShowGrid(true);
            setGridboxes(tempGridBoxes);
        }
        addRowsToGrid();
    },[gridvalues, dimension]);

    return (
            localStorage.getItem("Player1") && localStorage.getItem("Player2") && showGrid ?
            <div id="gamewindow" className='gamewindow'>
                {won === "lose" && <p className='turnspecifier'>{JSON.parse(localStorage.getItem("Player" + chance)).name +  "'s Turn"}</p>}
                <div id='grid' className='grid' onClick={checkandmark} style={rowSizeStyle}>{gridboxes}</div> 
                {won === "lose" ? "" : <WinnerModal newgame={setGridvalues} closeModal={setWon} player={winner} result={won} restart={setChance}/>}
            </div> :
            <div className='gamewindow'> ADD PLAYER DETAILS FIREST TO START PLAYING </div>
    )

};

export default Grid;
