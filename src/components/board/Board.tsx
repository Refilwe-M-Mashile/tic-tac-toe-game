import { useEffect, useState } from "react";
import { Side } from "../side/Side";
import { Square } from "../square/Square";
import "./Board.scss";

export const Board = () => {
  const [avatar, setAvatar] = useState("🔥");
  const [winner, setWinner] = useState("");
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const squares = Array(9).fill(null);
  //squares = squares.map((square, i) => <Square value="" position={i} />);
  const [cells, setCells] = useState(squares);

  const onMove = (position: number, value: string) => {
    const newCells = cells;
    newCells[position] = value;
    setCells(newCells);
    setIsPlayerOne(!isPlayerOne);
  };

  const checkWinner = () => {
    let winnerAvatar;

    //rows
    winnerAvatar =
      (cells[0] === cells[1] && cells[0] === cells[2] && cells[0]) ||
      (cells[3] === cells[4] && cells[3] === cells[5] && cells[3]) ||
      (cells[6] === cells[7] && cells[6] === cells[8] && cells[6]);
    if (winnerAvatar) return winnerAvatar;

    //cols
    winnerAvatar =
      (cells[0] === cells[3] && cells[0] === cells[6] && cells[0]) ||
      (cells[1] === cells[4] && cells[1] === cells[7] && cells[1]) ||
      (cells[2] === cells[5] && cells[2] === cells[8] && cells[2]);
    if (winnerAvatar) return winnerAvatar;

    //diagonal
    winnerAvatar =
      (cells[0] === cells[4] && cells[0] === cells[8] && cells[0]) ||
      (cells[2] === cells[4] && cells[2] === cells[6] && cells[2]);

    return winnerAvatar ? winnerAvatar : "";
  };

  useEffect(() => {
    setWinner(checkWinner());
    if (winner == "" || !!winner) setAvatar(isPlayerOne ? "🔥" : "💧");
  }, [isPlayerOne]);

  const checkIfPlayerOne = () => {
    return winner === "" ? "" : winner === "🔥" ? "You Win!" : "You Lose!";
  };
  const checkIfPlayerTwo = () => {
    return winner === "" ? "" : winner === "💧" ? "You Win!" : "You Lose!";
  };
  return (
    <div className="game">
      {(isPlayerOne || winner !== "") && (
        <Side
          player="1"
          avatar={winner !== "" ? "🔥" : avatar}
          status={checkIfPlayerOne()}
        />
      )}
      <div className="board">
        <div className="row">
          <Square
            value={cells[0]}
            position={0}
            onClick={() => onMove(0, avatar)}
          />
          <Square
            value={cells[1]}
            position={1}
            onClick={() => onMove(1, avatar)}
          />
          <Square
            value={cells[2]}
            position={2}
            onClick={() => onMove(2, avatar)}
          />
        </div>
        <div className="row">
          <Square
            value={cells[3]}
            position={3}
            onClick={() => onMove(3, avatar)}
          />
          <Square
            value={cells[4]}
            position={4}
            onClick={() => onMove(4, avatar)}
          />
          <Square
            value={cells[5]}
            position={5}
            onClick={() => onMove(5, avatar)}
          />
        </div>
        <div className="row">
          <Square
            value={cells[6]}
            position={6}
            onClick={() => onMove(6, avatar)}
          />
          <Square
            value={cells[7]}
            position={7}
            onClick={() => onMove(7, avatar)}
          />
          <Square
            value={cells[8]}
            position={8}
            onClick={() => onMove(8, avatar)}
          />
        </div>
      </div>
      {(!isPlayerOne || winner !== "") && (
        <Side
          player="2"
          avatar={winner !== "" ? "💧" : avatar}
          status={checkIfPlayerTwo()}
        />
      )}
    </div>
  );
};
