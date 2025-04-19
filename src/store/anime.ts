import { Anime } from "@/types/Anime";
import { signal } from "@preact/signals";

// Mock anime data
export const animeList = signal<Anime[]>([
  {
    description:
      "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    id: "1",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    title: "Attack on Titan",
  },
  {
    description:
      "A high school student discovers a supernatural notebook that allows him to kill anyone by writing the victim's name while picturing their face.",
    id: "2",
    image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    title: "Death Note",
  },
  {
    description:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    id: "3",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    title: "Fullmetal Alchemist: Brotherhood",
  },
]);

export class AnimeNotFoundError extends Error {
  constructor(id: string) {
    super(`Anime with id ${id} not found`);
    this.name = "AnimeNotFoundError";
  }
}

export const getAnimeById = async (id: string): Promise<Anime> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const anime = animeList.value.find((anime) => anime.id === id);

  if (!anime) {
    throw new AnimeNotFoundError(id);
  }

  return anime;
};
