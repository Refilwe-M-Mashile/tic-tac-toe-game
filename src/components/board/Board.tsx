import { Square } from "../square/Square";
import "./Board.scss";

export const Board = () => {
  const mapSquares = () => {};

  return (
    <div className="board">
      <div className="row">
        <Square value="0" position={0} />
        <Square value="1" position={1} />
        <Square value="2" position={2} />
      </div>
      <div className="row">
        <Square value="3" position={3} />
        <Square value="4" position={4} />
        <Square value="5" position={5} />
      </div>
      <div className="row">
        <Square value="6" position={6} />
        <Square value="7" position={7} />
        <Square value="8" position={8} />
      </div>
    </div>
  );
};
