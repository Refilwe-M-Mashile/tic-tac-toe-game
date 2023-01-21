import "./Side.scss";

type SideViewType = {
  player: string;
  avatar: string;
  status: string;
};

export const Side = (props: SideViewType) => {
  const { player, avatar, status } = props;
  return (
    <div className="side-view">
      <h1>Player {player}</h1>
      <div className="avatar">{avatar}</div>
      <div className="status">{status}</div>
    </div>
  );
};
