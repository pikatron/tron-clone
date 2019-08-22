import React, { useState } from 'react';

const Biker = (props) => {
    const [direction,changeDirection] = useState('')


    const handleKeyPress = (e) =>{
        const key = {
            'ArrowLeft': 'Left',
            'a': 'Left',

            'ArrowRight': 'Right',
            'd': 'Right',

            'ArrowUp': 'Up',
            'w': 'Up',

            'ArrowDown': 'Down',
            's': 'Down',
        }

        if( key[e.key] ){
            changeDirection( key[e.key] );
            props.socket.emit('turn', direction)
        } else {
            console.log('Player: ', props.team, ' please enter a valid key stroke')
        }
    }
    
    return (
        // this.props.team should either be blue/red
        <div id='Biker' className={props.team} onKeyDown={ (e) => handleKeyPress(e) } tabIndex='0' >

        </div>
    )
   
    
}

export default Biker;