import { Season } from "./Season";

export interface Episode {
  name: string;
  season?: Season["id"];
  path: string;
}
