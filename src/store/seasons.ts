import type { Anime } from "@/types/Anime";
import { DisplayError } from "@/types/ErrorDisplay";
import { Episode } from "@/types/Episode";
import { Season } from "@/types/Season";
import { api } from "@/services/api";

const useMockData = import.meta.env.VITE_USE_MOCK_DATA === "true";

// Mock seasons data
const mockSeasonsList: Season[] = [
  {
    anime: 1,
    episodes: [],
    id: 1,
    number: 1,
  },
  {
    anime: 1,
    episodes: [],
    id: 2,
    number: 2,
  },
  {
    anime: 2,
    episodes: [],
    id: 3,
    number: 1,
  },
  {
    anime: 3,
    episodes: [],
    id: 4,
    number: 1,
  },
];

export const getSeasonsByAnimeId = async (animeId: Anime["id"]) => {
  if (useMockData) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const seasons = mockSeasonsList.filter(
      (season) => season.anime === animeId,
    );
    return seasons;
  }
  const seasons = await api.anime.getSeasons(animeId);
  if (!seasons) {
    throw new NoSeasonsForAnimeError();
  }
  return seasons.items
    .map((season) => ({
      anime: animeId,
      episodes: season.episodes as Episode[],
      id: season.number,
      number: season.number,
    }))
    .reverse();
};

export class NoSeasonsForAnimeError extends DisplayError {
  constructor() {
    super(`У этого аниме нет сезонов`, 404);
  }
}
