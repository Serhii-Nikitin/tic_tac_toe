import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Cell = ({
  cell,
  setCounter,
  counter,
  setSelectedCell,
  selectedCell,
}) => {
  const [button, setButton] = useState('');
  const [isButtonChecked, setIsButtonChecked] = useState(false);

  const handleButton = (count) => {
    if ((count + 1) % 2 === 0) {
      setButton('O');
    } else {
      setButton('X');
    }
  };

  return (
    <button
      className="game-board__cell button is-active"
      type="button"
      onClick={() => {
        setCounter(current => current + 1);
        handleButton(counter);
        setSelectedCell(cell);
        setIsButtonChecked(true);
      }}
      disabled={isButtonChecked}
    >
      {button}
    </button>
  );
};

Cell.propTypes = {
  cell: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
  setSelectedCell: PropTypes.func.isRequired,
  selectedCell: PropTypes.number.isRequired,
};
