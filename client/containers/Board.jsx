import React, { Component } from 'react';

import GridBox from '../components/GridBox'
import Biker from '../components/Biker'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render(){

        let allGridItems = [];
        for(let i = 0; i < 144; i++){
            allGridItems.push(
                <GridBox key={i} />
            )
        }

        

        return(
            <div id='TotalBoard'>
                <div id='MainBoard' >
                    {allGridItems}
                </div>
                <Biker team='Red' />
                <Biker team='Blue' />
            </div>
        )
    }
}

export default Board;