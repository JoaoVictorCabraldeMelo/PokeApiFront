import { Pokemon } from "../../utils/Pokemon/types";
import { ContainerPokemons, ContainerTrade } from "./components";
import TradeSvg from "../../assets/img/trade.svg";

interface TradeProps {
  player1_pokemons: Pokemon[];
  player2_poKemons: Pokemon[];
}

const TradeComponent: React.FC<TradeProps> = ({
  player1_pokemons,
  player2_poKemons,
}) => {
  return (
    <ContainerTrade>
      <ContainerPokemons>
        {player1_pokemons.map((pokemon) => {
          return (
            <img src={pokemon.image} alt="pokemonTrocado" key={pokemon.id} />
          );
        })}
      </ContainerPokemons>
      <img src={TradeSvg} alt="ImagemDeTroca" height="70%" />
      <ContainerPokemons>
        {player2_poKemons.map((pokemon) => {
          return (
            <img src={pokemon.image} alt="pokemonTrocado" key={pokemon.id} />
          );
        })}
      </ContainerPokemons>
    </ContainerTrade>
  );
};

export default TradeComponent;
