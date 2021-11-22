import { useEffect, useState } from "react";
import { client } from "../../services/api";
import MenuAppBar from "../../components/AppBar/AppBar";
import { Pokemon } from "../../utils/Pokemon/types";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {
  AllPokemonsContainer,
  TitleContainer,
  LoadContainer,
  PlayerContainer,
} from "../../components/Container/ContainerAllPokemons";
import {
  PlayerText,
  TitlePlayer,
  TitlePokemon,
} from "../../components/Text/Title";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import {
  PageContainer,
  ColumnContainer,
  Description,
  TradeButton,
} from "./components";
import ListPokemon from "../../components/ListPokemon/ListPokemon";
import Error from "../../components/Alert/Error";
import Success from "../../components/Alert/Success";

const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [pokemonsPlayer1, setPokemonsPlayer1] = useState<Pokemon[]>([]);
  const [pokemonsPlayer2, setPokemonsPlayer2] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingTrade, setLoadingTrade] = useState<boolean>(false);
  const [colorPlayer1, setColorPlayer1] = useState<string>("red");
  const [colorPlayer2, setColorPlayer2] = useState<string>("black");
  const [player, setPlayer] = useState<string>("player1");
  const [openError, setOpenError] = useState<boolean>(false);
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    client
      .get("pokemons")
      .then((res) => {
        setAllPokemons(res.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const onClickPlayer1 = (event: any) => {
    setColorPlayer2("black");
    setColorPlayer1("red");
    setPlayer("player1");
  };

  const onClickPlayer2 = (event: any) => {
    setColorPlayer1("black");
    setColorPlayer2("red");
    setPlayer("player2");
  };

  const onClickPokemon = (pokemon: Pokemon) => {
    if (player === "player1" && pokemonsPlayer1.length < 6) {
      setPokemonsPlayer1([...pokemonsPlayer1, pokemon]);
    } else if (player === "player2" && pokemonsPlayer2.length < 6) {
      setPokemonsPlayer2([...pokemonsPlayer2, pokemon]);
    }
  };

  const handleTrade = () => {
    if (pokemonsPlayer1.length === 0 && pokemonsPlayer2.length === 0) {
      setMessage("Player 1 e Player 2 nao tem nenhum pokemon!!");
      setOpenError(true);
    } else if (pokemonsPlayer1.length === 0) {
      setMessage("Player 1 nao tem nenhum pokemon!!");
      setOpenError(true);
    } else if (pokemonsPlayer2.length === 0) {
      setMessage("Player 2 nao tem nenhum pokemon!!");
      setOpenError(true);
    } else {
      let time_1_total = 0;
      pokemonsPlayer1.forEach(
        (pokemon) => (time_1_total += pokemon.experience)
      );
      let time_2_total = 0;
      pokemonsPlayer2.forEach(
        (pokemon) => (time_2_total += pokemon.experience)
      );
      if (Math.abs(time_1_total - time_2_total) > 50) {
        setMessage("Troca Injusta !!");
        setOpenError(true);
      } else {
        setLoadingTrade(true);
        client
          .post("histories", {
            pokemon_player1_ids: pokemonsPlayer1.map((pokemon) => pokemon.id),
            pokemon_player2_ids: pokemonsPlayer2.map((pokemon) => pokemon.id),
          })
          .then((res) => {
            setLoadingTrade(false);
            setMessage("Troca Realizado com sucesso !!");
            setOpenSuccess(true);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <div style={{ height: "100%" }}>
      <MenuAppBar />
      <PageContainer>
        <ColumnContainer>
          <TitleContainer>
            <TitlePokemon> Escolha seus Pokemons </TitlePokemon>
          </TitleContainer>
          {loading ? (
            <LoadContainer>
              <CircularProgress color="inherit" />
            </LoadContainer>
          ) : (
            <AllPokemonsContainer>
              {allPokemons.map((pokemon) => (
                <PokemonCard
                  image={pokemon.image}
                  name={pokemon.name}
                  id={pokemon.id}
                  experience={pokemon.experience}
                  onClick={() => onClickPokemon(pokemon)}
                  key={pokemon.id}
                />
              ))}
            </AllPokemonsContainer>
          )}
        </ColumnContainer>
        <ColumnContainer>
          <TitleContainer>
            <TitlePlayer>Escolha o Player </TitlePlayer>
          </TitleContainer>
          <Description>
            O jogo consiste entre voce escolher seu player e time de pokemons
            para fazer uma troca com um amigo, porem o sistema percebe
            malandrinhos
          </Description>
          <PlayerContainer>
            <PlayerText color={colorPlayer1} onClick={onClickPlayer1}>
              Player1
            </PlayerText>
            <PlayerText color={colorPlayer2} onClick={onClickPlayer2}>
              Player2
            </PlayerText>
          </PlayerContainer>
          <ListPokemon player="Player 1" pokemons={pokemonsPlayer1} />
          <ListPokemon player="Player 2" pokemons={pokemonsPlayer2} />
          {loadingTrade ? (
            <LoadContainer>
              <CircularProgress color="inherit" />
            </LoadContainer>
          ) : (
            <TradeButton onClick={() => handleTrade()}>Trocar</TradeButton>
          )}
          <Error
            message={message}
            show={openError}
            onClose={() => setOpenError(false)}
          />
          <Success
            message={message}
            show={openSuccess}
            onClose={() => setOpenSuccess(false)}
          />
        </ColumnContainer>
      </PageContainer>
    </div>
  );
};

export default Pokemons;
