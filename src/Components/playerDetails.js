import React, { useEffect, useState } from 'react'

// CSS
import "../Assets/stylesheets/PlayerDetails/PlayerDetails.css"

// Assets
import SelectPlayer from "../Assets/Resources/selectplayer.svg"

// Component
import PlayerCard from './playerCard'

const PlayerDetails = (props) => {
    const [startGame, setStartGame] = useState(false);
    const [cross, setCross] = useState("Player1")

    function setDimensions(event)
    {
        props.setDimension(event.target.value)
        localStorage.setItem("Dimension", event.target.value)
    }
    const checkForStartGame = () => 
    {
        if ('Player1' in localStorage && 'Player2' in localStorage)
        {
            setStartGame(true)
        }
        else
        {
            setStartGame(false)
        }
    }

    useEffect(() => {
        checkForStartGame();
    }, [startGame])
       
    return (
        <div id='playerDetails' className='playerDetails' >
            <select onChange={setDimensions} className='gridSize'>
                    <option value='3'>3 X 3</option>
                    <option value='5'>5 X 5</option>
                    <option value='7'>7 X 7</option>
            </select>
            <div className='playerCards'>
                <PlayerCard name='Player1' onCallback={checkForStartGame} selectCross={setCross} assignedcross={cross}/>
                <img className='centerimg' src={SelectPlayer} alt=""/>
                <PlayerCard name='Player2' onCallback={checkForStartGame} selectCross={setCross} assignedcross={cross}/>
            </div>
            {startGame && <a href='#gamewindow'><button className='goToGrid'>Lets get Started</button></a>}
        </div>
    )
}

export default PlayerDetails