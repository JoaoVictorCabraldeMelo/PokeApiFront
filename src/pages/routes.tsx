import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokemons from "./Pokemons/Pokemons"
import HistoryTrade from "./HistoryTrade/HistoryTrade"
import './base.css';

const PokeRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/history"  element={<HistoryTrade />} />
      </Routes>
    </Router>
    );
};

export default PokeRoutes;
