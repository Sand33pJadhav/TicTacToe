import React, { useState, useEffect } from 'react';
import SquareComponent from './SquareComponent';

const initState = ["", "", "", "", "", "", "", "", ""];
const message = "";
function App() {
  const [gameState, updateGameState] = useState(initState);
  const [isX, updateX] = useState(false);

  const onSquareClicked = (index)=> {

    let string = Array.from(gameState);
    string[index] = isX ? "X" : "O";
    updateGameState(string);
    updateX(!isX);

  }

  useEffect(() => {
    const winner =  checkWinner();

    if(winner){
      //message = `${winner} Won the game`;
      alert(`${winner} Won the game`);
      updateGameState(initState);
    }
  }, [gameState])

  const checkWinner = ()=> {
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
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  return (
    <div className="app-header">
      <p className="header-text">Tic Tac Toe</p>
      <p></p>
      <div className=" row jc-center">
        <SquareComponent className="border-bottom-right" state={gameState[0]} onClick={()=>onSquareClicked(0)}/>
        <SquareComponent className="border-bottom-right" state={gameState[1]} onClick={()=>onSquareClicked(1)}/>
        <SquareComponent className="border-bottom" state={gameState[2]} onClick={()=>onSquareClicked(2)}/>
      </div>
      <div className=" row jc-center">
      <SquareComponent className="border-bottom-right" state={gameState[3]} onClick={()=>onSquareClicked(3)}/>
        <SquareComponent className="border-bottom-right" state={gameState[4]} onClick={()=>onSquareClicked(4)}/>
        <SquareComponent className="border-bottom" state={gameState[5]} onClick={()=>onSquareClicked(5)}/>
      </div>
      <div className=" row jc-center">
        <SquareComponent className="border-right" state={gameState[6]} onClick={()=>onSquareClicked(6)}/>
        <SquareComponent className="border-right" state={gameState[7]} onClick={()=>onSquareClicked(7)}/>
        <SquareComponent state={gameState[8]} onClick={()=>onSquareClicked(8)}/>
      </div>
      <button onClick={()=>updateGameState(initState)}>Clear</button>
    </div>
  );
}

export default App;
