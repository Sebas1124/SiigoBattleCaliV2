import React from 'react';

import './roomstyles.css'

export const RoomMatch = () => {
  return (
    <>
    <div id='game_container'>
        <div className='cards_players'>
            <div id='cards_p1' className='cards_P'></div>
            <div id='cards_p2' className='cards_P'></div>
            <div id='cards_p3' className='cards_P'></div>
            <div id='cards_p4' className='cards_P'></div>
            <div id='cards_p5' className='cards_P'></div>
            <div id='cards_p6' className='cards_P'></div>
            <div id='cards_p7' className='cards_P'></div>
        </div>
    </div>

    <div id='mazo'>
        
    </div>

    <div className='botones_atrib'>
        <button id='health'></button>
        <button id='hability'></button>
        <button id='power'></button>
        <button id='speed'></button>
    </div>
        
    <div id='showedCard'>

    </div>

    <div className='Liderboard'>
        <div id='1ts'></div>
        <div id='2nd'></div>
        <div id='3rd'></div>
        <div id='4th'></div>
        <div id='5th'></div>
        <div id='6th'></div>
        <div id='7th'></div>
    </div>
    </>
  )
}
