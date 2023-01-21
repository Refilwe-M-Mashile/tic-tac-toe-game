import "./Square.scss";

type SquareType = {
  value: string;
  position: Number;
};

export const Square = (props: SquareType) => {
  return (
    <div className="square" {...props}>
      {props.value}
    </div>
  );
};
