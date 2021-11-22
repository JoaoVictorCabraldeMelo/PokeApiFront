import { client } from "../../services/api";
import { useEffect, useState } from "react";
import MenuAppBar from "../../components/AppBar/AppBar";
import { History, Trade } from "../../utils/Pokemon/types";
import { HistoryTitle, PageContainer } from "./components";
import TradeComponent from "../../components/Trade/Trade";

const HistoryTrade = () => {
  useEffect(() => {
    client
      .get("histories")
      .then((res) => {
        let trades = res.data.map((trade: any) => {
          return {
            player1: trade.player1.pokemons,
            player2: trade.player2.pokemons,
          };
        });
        setHistory({ trades });
      })
      .catch((err) => console.error(err));
  }, []);

  const [history, setHistory] = useState<History>();

  return (
    <>
      <MenuAppBar />
      <PageContainer>
        <HistoryTitle>Trocas</HistoryTitle>
        {history?.trades.map((trade: Trade) => {
          return (
            <TradeComponent
              player1_pokemons={trade.player1}
              player2_poKemons={trade.player2}
            />
          );
        })}
      </PageContainer>
    </>
  );
};

export default HistoryTrade;
