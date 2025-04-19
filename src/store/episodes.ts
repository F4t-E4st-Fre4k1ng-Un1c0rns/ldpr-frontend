import { Episode } from "@/types/Episode";
import { signal } from "@preact/signals";

// Mock episodes data
export const episodesList = signal<Episode[]>([
  {
    id: "e1",
    path: "/videos/attack-on-titan/s1/e1.mp4",
    season: "s1",
  },
  {
    id: "e2",
    path: "/videos/attack-on-titan/s1/e2.mp4",
    season: "s1",
  },
  {
    id: "e3",
    path: "/videos/attack-on-titan/s2/e1.mp4",
    season: "s2",
  },
  {
    id: "e4",
    path: "/videos/death-note/s1/e1.mp4",
    season: "s3",
  },
  {
    id: "e5",
    path: "/videos/fma/s1/e1.mp4",
    season: "s4",
  },
]);

export class EpisodeNotFoundError extends Error {
  constructor(id: string) {
    super(`Episode with id ${id} not found`);
    this.name = "EpisodeNotFoundError";
  }
}

export class NoEpisodesForSeasonError extends Error {
  constructor(seasonId: string) {
    super(`No episodes found for season with id ${seasonId}`);
    this.name = "NoEpisodesForSeasonError";
  }
}

export const getEpisodeById = async (id: string): Promise<Episode> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const episode = episodesList.value.find((episode) => episode.id === id);

  if (!episode) {
    throw new EpisodeNotFoundError(id);
  }

  return episode;
};

export const getEpisodesBySeasonId = async (
  seasonId: string,
): Promise<Episode[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const episodes = episodesList.value.filter(
    (episode) => episode.season === seasonId,
  );

  if (episodes.length === 0) {
    throw new NoEpisodesForSeasonError(seasonId);
  }

  return episodes;
};
