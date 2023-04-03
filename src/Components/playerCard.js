import React, { useState } from 'react'

//CSS
import "../Assets/stylesheets/PlayerCard/PlayerCard.css"

// Assets
import cross from "../Assets/Resources/cross.svg"
import plus from "../Assets/Resources/plus.svg"

const PlayerCard = (props) => {
    const [submitDetails, setSubmitDetails] = useState("Done")

    function saveDetails(event)
    {
        event.preventDefault();
        let elements = event.target.elements
        const name = elements['playerName'].value
        const symbol = elements['Symbol'].value
        localStorage.setItem(event.target.id, JSON.stringify({"name": name, "symbol": symbol}))
        setSubmitDetails(event.target.id + " Added")
        props.onCallback()
    }

    function changeSymbol(event)
    {
        if (event.target.value === 'cross')
        {
            props.selectCross(props.name)
        }
        else
        {
            props.selectCross(props.name === 'Player1' ? 'Player2' : 'Player1')
        }
    }

    return (
        <form id={props.name} className='playerCard' onSubmit={saveDetails}>
            <label>Player Name <input name='playerName' id='playerName' type='text' placeholder={props.name} required></input></label>
            <label id='symbol'>Player Symbol</label>
            <div className='chooseSymbol'>
            <input type="radio" id="SymbolCross" name="Symbol" value="cross" checked={props.assignedcross === props.name} onClick={changeSymbol} required/>
            <img src= {cross} alt='Symbol'></img><br/>
            <input type="radio" id="css" name="Symbol" value="plus" checked={props.assignedcross !== props.name} onClick={changeSymbol} required/>
            <img id='plus' src={plus} alt='Symbol'></img>
            </div>
            <input type='submit' id='addDetailsBtn' value={submitDetails}/>
        </form> 
    )
}

export default PlayerCard