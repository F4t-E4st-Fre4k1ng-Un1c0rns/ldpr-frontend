import { DisplayError } from "@/types/ErrorDisplay";
import { Season } from "@/types/Season";
import { api } from "../services/api";

const useMockData = import.meta.env.VITE_USE_MOCK_DATA === "true";

// Mock seasons data
const mockSeasonsList: Season[] = [
  {
    anime: "1",
    id: "s1",
    number: 1,
  },
  {
    anime: "1",
    id: "s2",
    number: 2,
  },
  {
    anime: "2",
    id: "s3",
    number: 1,
  },
  {
    anime: "3",
    id: "s4",
    number: 1,
  },
];

export const getSeasonsByAnimeId = async (animeId: string) => {
  if (useMockData) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const seasons = mockSeasonsList.filter(
      (season) => season.anime === animeId.toString(),
    );
    return seasons;
  } else {
    const response = await api.anime.getEpisodesInSeason(animeId);
    const seasons = response.items.map((item) => ({
      anime: animeId.toString(),
      id: `s${item.number}`,
      number: item.number,
    }));
    return seasons;
  }
};

export class SeasonNotFoundError extends DisplayError {
  constructor() {
    super(`Такого сезона не существует`, 404);
  }
}

export class NoSeasonsForAnimeError extends DisplayError {
  constructor() {
    super(`У этого аниме нет сезонов`, 404);
  }
}
