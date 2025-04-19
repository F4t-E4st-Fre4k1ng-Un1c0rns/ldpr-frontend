import type { Anime } from "./Anime";
import type { Episode } from "./Episode";

export interface Season {
  id: number;
  number: number;
  anime?: Anime["id"];
  episodes: Episode[];
}
