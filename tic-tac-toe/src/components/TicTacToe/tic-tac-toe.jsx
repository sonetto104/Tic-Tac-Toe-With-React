import React from 'react'
import './tic-tac-toe.css'
import circle_icon from '../assets/o.png'
import x_icon from '../assets/x.png'

const TicTacToe = () => {
    return(
        <div className='container'>
            <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
            <div className='board'>

            </div>
             <button className="reset">Reset</button>
        </div>
    )
}

export default TicTacToe