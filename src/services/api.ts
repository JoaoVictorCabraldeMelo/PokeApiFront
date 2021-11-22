import axios from "axios";

export const client = axios.create({
  baseURL: "https://pokeapicabral.herokuapp.com/",
});

