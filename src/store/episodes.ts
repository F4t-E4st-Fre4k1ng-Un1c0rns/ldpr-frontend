import { Episode } from "@/types/Episode";
import { ErrorType } from "@/types/ErrorDisplay";
import { api } from "@/services/api";
import { signal } from "@preact/signals";

const useMockData = import.meta.env.VITE_USE_MOCK_DATA === "true";

// Mock episodes data
export const episodesList = signal<Episode[]>([
  {
    id: "e1",
    name: "To You, in 2000 Years: The Fall of Shiganshina, Part 1",
    path: "https://s3.love-this.ru/hackaton/Phineas and Ferb - S01E01-E02 - Rollercoaster & Candace Loses Her Head (1080p WEB-DL x265 HEVC 10bit AAC 2.0 RCVR) [UTR].webm",
    season: "s1",
  },
  {
    id: "e2",
    name: "That Day: The Fall of Shiganshina, Part 2",
    path: "https://s3.love-this.ru/hackaton/Phineas and Ferb - S01E01-E02 - Rollercoaster & Candace Loses Her Head (1080p WEB-DL x265 HEVC 10bit AAC 2.0 RCVR) [UTR].webm",
    season: "s1",
  },
  {
    id: "e3",
    name: "Beast Titan",
    path: "https://s3.love-this.ru/hackaton/Phineas and Ferb - S01E01-E02 - Rollercoaster & Candace Loses Her Head (1080p WEB-DL x265 HEVC 10bit AAC 2.0 RCVR) [UTR].webm",
    season: "s2",
  },
  {
    id: "e4",
    name: "Rebirth",
    path: "https://s3.love-this.ru/hackaton/Phineas and Ferb - S01E01-E02 - Rollercoaster & Candace Loses Her Head (1080p WEB-DL x265 HEVC 10bit AAC 2.0 RCVR) [UTR].webm",
    season: "s3",
  },
  {
    id: "e5",
    name: "The Alchemist of Steel",
    path: "https://s3.love-this.ru/hackaton/Phineas and Ferb - S01E01-E02 - Rollercoaster & Candace Loses Her Head (1080p WEB-DL x265 HEVC 10bit AAC 2.0 RCVR) [UTR].webm",
    season: "s4",
  },
]);

export class EpisodeNotFoundError extends Error {
  constructor() {
    super(`Такого эпизода не существует`);
  }
  readonly type: ErrorType = 404;
}

export class NoEpisodesForSeasonError extends Error {
  constructor() {
    super(`У этого сезона нет эпизодов`);
    this.name = "NoEpisodesForSeasonError";
  }
  readonly type: ErrorType = 404;
}

export const getEpisodesBySeasonId = async (
  seasonId: string,
): Promise<Episode[]> => {
  if (useMockData) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const episodes = episodesList.value.filter(
      (episode) => episode.season === seasonId,
    );

    if (episodes.length === 0) {
      throw new NoEpisodesForSeasonError();
    }

    return episodes;
  } else {
    const response = await api.anime.getEpisodesInSeason(seasonId);
    return response.items.map((item) => ({
      id: item.path,
      name: item.name,
      path: item.path,
      season: seasonId,
    }));
  }
};
