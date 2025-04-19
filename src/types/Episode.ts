import { Season } from "./Season";

export interface Episode {
  id: string;
  season: Season["id"];
  path: string;
}
