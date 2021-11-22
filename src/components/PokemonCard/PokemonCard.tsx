import { Card } from "./components";
import { Pokemon } from "../../utils/Pokemon/types";

interface PokemonCardProps {
  onClick ?: React.MouseEventHandler
}

const PokemonCard: React.FC<Pokemon & PokemonCardProps> = ({ name, image, onClick }) => {
  return (
    <Card onClick={onClick}>
      <img src={image} alt="pokemonImage" />
      <p>{name}</p>
    </Card>
  );
};

export default PokemonCard;
