import { DisplayError } from "@/types/ErrorDisplay";
import { Season } from "@/types/Season";
import { signal } from "@preact/signals";

// Mock seasons data
export const seasonsList = signal<Season[]>([
  {
    anime: "a1",
    id: "s1",
    number: 1,
  },
  {
    anime: "a1",
    id: "s2",
    number: 2,
  },
  {
    anime: "a2",
    id: "s3",
    number: 1,
  },
  {
    anime: "a3",
    id: "s4",
    number: 1,
  },
]);

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

export const getSeasonById = async (id: string): Promise<Season> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  const season = seasonsList.value.find((season) => season.id === id);
  if (!season) {
    throw new SeasonNotFoundError();
  }
  return season;
};

export const getSeasonsByAnimeId = async (
  animeId: string,
): Promise<Season[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  const seasons = seasonsList.value.filter(
    (season) => season.anime === animeId,
  );
  if (seasons.length === 0) {
    throw new NoSeasonsForAnimeError();
  }
  return seasons;
};
