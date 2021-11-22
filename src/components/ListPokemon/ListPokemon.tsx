import { Pokemon } from "../../utils/Pokemon/types";
import { TitleList, BoxPokemons } from "./components";

interface ListPokemonProps {
  pokemons: Pokemon[];
  player: string;
}

const ListPokemon: React.FC<ListPokemonProps> = ({ pokemons, player }) => {
  return (
    <>
      <TitleList>{player} Pokemons</TitleList>
      <BoxPokemons>
        {pokemons.map((pokemon) => (
          <img src={pokemon.image} alt="pokemonEscolhido" key={pokemon.id} />
        ))}
      </BoxPokemons>
    </>
  );
};

export default ListPokemon;
