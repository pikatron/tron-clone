import React from 'react';
import PropTypes from 'prop-types';

function RestartButton(props) {
  const { running, restart, winner } = props;

  let winnerText = "It's a tie!";
  if (winner === 'player1win') winnerText = 'Player 1 wins!';
  else if (winner === 'player2win') winnerText = 'Player 2 wins!';

  return (
    !running && (
      <button type="button" id="ready-button" onClick={restart}>
        {winnerText}
        <br />
        Restart?
      </button>
    )
  );
}

RestartButton.propTypes = {
  running: PropTypes.bool.isRequired,
  restart: PropTypes.func.isRequired,
  winner: PropTypes.string.isRequired,
};

export default RestartButton;
