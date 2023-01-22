import { useEffect, useState } from "react";
import { Side } from "../side/Side";
import { Square } from "../square/Square";
import "./Board.scss";

export const Board = () => {
  const [avatar, setAvatar] = useState("🔥");
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

  const checkWinner = () => {};

  useEffect(() => setAvatar(isPlayerOne ? "🔥" : "💧"), [isPlayerOne]);
  return (
    <div className="game">
      {isPlayerOne && <Side player="1" avatar={avatar} status="" />}
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
      {!isPlayerOne && <Side player="2" avatar={avatar} status="" />}
    </div>
  );
};
