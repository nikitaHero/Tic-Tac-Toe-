import React from "react";
import { Wrapper, Squeare } from "./styled";

export default ({ gameStatus, setGameStatus, onWin, onStep }) => {
  const handleSquareClick = i => {
    const { gameOver, gameScore, squares, xIsNext } = gameStatus;
    const newSquares = squares.slice();

    newSquares[i] =
      newSquares[i] === null ? (xIsNext ? "x" : "o") : newSquares[i];

    const winner = calculateWinner(newSquares);

    if (winner && !gameOver) {
      const newScore = {
        ...gameScore,
        [winner]: parseInt(gameScore[winner]) + 1
      };

      setGameStatus({
        ...gameStatus,
        gameOver: true,
        currentWinner: winner,
        gameScore: newScore,
        squares: newSquares,
        xIsNext: !xIsNext
      });

      onWin(newScore);
      onStep(newSquares);
    } else if (winner && gameOver) {
      return;
    } else if (newSquares[i] !== squares[i]) {
      setGameStatus({
        ...gameStatus,
        squares: newSquares,
        xIsNext: !xIsNext
      });
      onStep(newSquares);
    }
  };

  return (
    <Wrapper>
      {gameStatus.squares.map((square, index) => (
        <Squeare onClick={() => handleSquareClick(index)} key={index}>
          {square !== null ? square : ""}
        </Squeare>
      ))}
    </Wrapper>
  );
};

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
