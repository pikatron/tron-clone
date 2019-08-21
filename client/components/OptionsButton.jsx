import React, {useState} from 'react'

const ReadyPlayer = (props) => {
    return(
        <button className = 'ready-button' id = {`${props.team}-button`}>
            Ready Team {props.team}
        </button>
    )
};

export default ReadyPlayer