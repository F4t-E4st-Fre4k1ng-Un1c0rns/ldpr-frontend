import { Season } from "./Season";

export interface Episode {
  id: string;
  name: string;
  season: Season["id"];
  path: string;
}
