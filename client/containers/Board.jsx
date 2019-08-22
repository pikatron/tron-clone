import React from 'react';
import PropTypes from 'prop-types';

import GridBox from '../components/GridBox';

const BOARD_SIZE = 30;

function Board(props) {
  const { board } = props;
  const gridPositions = [];
  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      const currentBox = board[y][x];

      let color = 'green';
      if (currentBox === 1) color = 'blue';
      else if (currentBox === 11) color = '#00FFFF';
      else if (currentBox === 2) color = 'red';
      else if (currentBox === 22) color = '#FF69B4';
      gridPositions.push(<GridBox key={`y${y}x${x}`} color={color} />);
    }
  }

  return (
    <div id="TotalBoard">
      <div id="MainBoard">{gridPositions}</div>
    </div>
  );
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Board;
