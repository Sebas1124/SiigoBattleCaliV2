import React from 'react'
import '../roomstyles.css'

export default Room = () => {
  return (
    <>
        <div id='wrapper'>
            <div id='game'>
                <div className='cards_players'>
                  <div id='cards_p1'></div>
                  <div id='cards_p2'></div>
                  <div id='cards_p3'></div>
                  <div id='cards_p4'></div>
                  <div id='cards_p5'></div>
                  <div id='cards_p6'></div>
                  <div id='cards_p7'></div>
                </div>
            </div>
          </div>

          <div id='Mazo'>
          
          </div>

          <div className='botones_atrib'>
            <button id='health'></button>
            <button id='hability'></button>
            <button id='power'></button>
            <button id='speed'></button>
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
