export interface AnimeInfo {
  name: string;
  description: string;
  posterPath: string;
  seasons: SeasonInfo[];
}

export interface AnimeOutput {
  items: AnimeInfo[];
}

export interface SeasonInfo {
  id: number;
  number: number;
}

export interface SeasonOutput {
  items: EpisodeInfo[];
}

export interface EpisodeInfo {
  number: number;
  name: string;
  path: string;
}
