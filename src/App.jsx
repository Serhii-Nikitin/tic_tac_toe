import React, { useState } from 'react';
import { Cell } from './components/Cell';
import 'bulma/bulma.sass';
import './App.scss';

const cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [selectedCell, setSelectedCell] = useState(0);

  return (
    <div className="page-content">
      <div className="game-board">
        {cells.map(cell => (
          <Cell
            key={cell}
            setCounter={setCounter}
            counter={counter}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            cell={cell}
          />
        ))}
      </div>
    </div>
  );
};
