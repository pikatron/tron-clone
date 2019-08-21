import React, { Component } from 'react';

class Biker extends Component {
    constructor(props){
        super(props)
        this.state = {
            // starting direction based off team color
            direction: props.team === 'Red' ? 'right' : 'left',
        }
    }

    handleKeyPress(e) {
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
            this.setState({ direction: key[e.key] });
        } else {
            console.log('Player: ', this.props.team, ' please enter a valid key stroke')
        }
   
    }

    render(){
        console.log(this.state)
        return (
            // this.props.team should either be blue/red
            <div id='Biker' className={this.props.team} onKeyDown={ (e) => this.handleKeyPress(e) } tabIndex='0' >

            </div>
        )
    }
}

export default Biker;