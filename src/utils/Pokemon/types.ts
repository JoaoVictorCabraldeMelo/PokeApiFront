export interface Pokemon {
  id: number;
  experience: number;
  name: string;
  image: string;
}

export interface Trade {
  player1: Pokemon[];
  player2: Pokemon[];
}

export interface History {
  trades: Trade[];
}