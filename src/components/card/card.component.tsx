import { MonsterType } from "../../App";
import "./card.styles.css";

type CardProps = { monster: MonsterType };

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=100x100`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
