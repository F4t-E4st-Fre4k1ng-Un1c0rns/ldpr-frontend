import { Season } from "./Season";

export interface Anime {
  id: number;
  title: string;
  description: string;
  image: string;
  seasons?: Season[];
}
