import { Anime } from "./Anime";

export interface Season {
  id: string;
  anime: Anime["id"];
  number: number;
}
