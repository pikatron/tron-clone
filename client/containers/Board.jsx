import React, { Component } from 'react';

import GridBox from '../components/GridBox'
import Biker from '../components/Biker'
import ReadyPlayer from '../components/OptionsButton';

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentBoard: [], // should be 12x12 subarray grid. Values inside should reflect the output
            // When /Home opens, the initial board from Ryan / backend is sent and we need to iterate and popkuate the board based on the grid
        }
    }


    render(){

        let gridSubArray = [];
        for(let y = 0; y < 12; y++){
            for(let x = 0; x < 12; x++){
                gridSubArray.push( <GridBox key={x + 'gridbox' + y} coordinates={[x,y]} /> )
            }
        }
        

        return(
            <div id='TotalBoard'>
                <div id='MainBoard' >
                    {gridSubArray}
                </div>
                <Biker team='Red' socket={this.props.socket} coordinates={[2,2]} />
                <Biker team='Blue'socket={this.props.socket} />
            </div>
        )
    }
}

export default Board;