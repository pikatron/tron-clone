import React from 'react';
import PropTypes from 'prop-types';

function RestartButton(props) {
  const { running, restart } = props;

  return (
    !running && (
      <button type="button" id="ready-button" onClick={restart}>
        Restart?
      </button>
    )
  );
}

RestartButton.propTypes = {
  running: PropTypes.bool.isRequired,
  restart: PropTypes.func.isRequired,
};

export default RestartButton;
