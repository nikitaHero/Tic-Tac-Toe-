import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { actions } from "../ducks";

import Board from "../Board";

import { Wrapper, Info, InfoItem, Steps, Step, NewGameBtn } from "./styled";

const Game = ({ data, setPlayerWins, setStep, setRemovedStep }) => {
  const [state, setState] = useState({
    currentWinner: null,
    gameOver: false,
    gameScore: null,
    currentGameHistory: null,
    removedSteps: [],
    squares: Array(9).fill(null),
    xIsNext: true
  });

  const { playerWins, gameHistory } = data;
  const {
    gameScore,
    gameOver,
    currentGameHistory,
    removedSteps,
    xIsNext,
    squares
  } = state;

  useEffect(() => {
    setState({
      ...state,
      gameScore: playerWins,
      currentGameHistory: gameHistory,
      squares: gameHistory[gameHistory.length - 1],
      removedSteps: data.removedSteps
    });

    const boardIsFieled = squares.some(item => item === null);
    if (!boardIsFieled) {
      setState({ ...state, gameOver: true });
    }
  }, [data]);

  const hadnleOnWin = newScore => {
    setPlayerWins(newScore);
  };

  const handleNewGame = () => {
    setState({
      ...state,
      currentWinner: null,
      gameOver: false,
      squares: Array(9).fill(null),
      xIsNext: true
    });
    setRemovedStep([]);
    setStep([Array(9).fill(null)]);
  };

  const handleSaveStep = newSquares => {
    const newHistory = currentGameHistory.slice();
    newHistory.push(newSquares);
    setStep(newHistory);
  };

  const handleBackStep = () => {
    if (currentGameHistory.length > 1) {
      const newHistory = currentGameHistory.slice();
      const removedItem = newHistory.pop();
      const newRemovedSteps = removedSteps.slice();

      newRemovedSteps.unshift(removedItem);

      setRemovedStep(newRemovedSteps);
      setStep(newHistory);
      setState({ ...state, xIsNext: !xIsNext });
    }
  };
  const handleForwardStep = () => {
    if (removedSteps.length > 0) {
      const newHistory = currentGameHistory.slice();
      const newRemovedSteps = removedSteps.slice();

      newHistory.push(newRemovedSteps[0]);
      newRemovedSteps.shift();

      setRemovedStep(newRemovedSteps);
      setStep(newHistory);
      setState({ ...state, xIsNext: !xIsNext });
    }
  };
  return (
    <Wrapper>
      {gameOver ? (
        <NewGameBtn onClick={handleNewGame}>New game!</NewGameBtn>
      ) : (
        false
      )}
      {gameOver ? (
        false
      ) : (
        <Steps>
          <Step active={gameHistory.length > 1} onClick={handleBackStep}>
            Step Back
          </Step>
          <Step active={removedSteps.length > 0} onClick={handleForwardStep}>
            Step Forward
          </Step>
        </Steps>
      )}
      <Board
        setGameStatus={setState}
        gameStatus={state}
        onWin={hadnleOnWin}
        onStep={handleSaveStep}
      />
      {gameScore ? (
        <Info>
          <InfoItem>Sets played: {gameScore.o + gameScore.x}</InfoItem>
          <InfoItem>Player X wins: {gameScore.x} </InfoItem>
          <InfoItem>Player O wins: {gameScore.o}</InfoItem>
        </Info>
      ) : (
        "Loading ..."
      )}
    </Wrapper>
  );
};

const mapState = state => ({
  data: state.gameData
});

const mapDispatch = dispatch => ({
  setPlayerWins: data => dispatch(actions.setPlayerWins(data)),
  setStep: data => dispatch(actions.setStep(data)),
  setRemovedStep: data => dispatch(actions.setRemovedStep(data))
});

export default connect(mapState, mapDispatch)(Game);
