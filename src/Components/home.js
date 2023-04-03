import React from 'react'

// CSS
import "../Assets/stylesheets/Home/home.css"

// Assets
import Gaming from "../Assets/Resources/gaming 2.svg"

const Home = () => {
  
  function startNewGame()
  {
    localStorage.removeItem('Player1')
    localStorage.removeItem('Player2')
    window.location.reload();
  }

  return (
    <div>
        <div className='startGame'>
            <img src={Gaming} alt='GamingImg'></img>
            <a href='#playerDetails'>
                <button onClick={startNewGame} className="letsStart">
                    New Game
                </button>
            </a>
        </div>
    </div>
  )
}

export default Home