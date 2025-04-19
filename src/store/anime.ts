import { Anime } from "@/types/Anime";
import { DisplayError } from "@/types/ErrorDisplay";
import { api } from "../services/api";
import { signal } from "@preact/signals";

const useMockData = import.meta.env.VITE_USE_MOCK_DATA === "true";

// Mock anime data
const mockAnimeList: Anime[] = [
  {
    description:
      "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    id: 1,
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    title: "Attack on Titan",
  },
  {
    description:
      "A high school student discovers a supernatural notebook that allows him to kill anyone by writing the victim's name while picturing their face.",
    id: 2,
    image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    title: "Death Note",
  },
  {
    description:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    id: 3,
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    title: "Fullmetal Alchemist: Brotherhood",
  },
];

export const animeList = signal<Anime[]>([]);

export const fetchAnimeList = async () => {
  if (useMockData) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    animeList.value = mockAnimeList;
  } else {
    const response = await api.anime.getAll();
    animeList.value = response.items.map((item) => ({
      description: item.description,
      id: item.id,
      image: item.posterPath,
      title: item.name,
    }));
  }
  return animeList.value;
};

export class AnimeNotFoundError extends DisplayError {
  constructor() {
    super(`Аниме не найдено`, 404);
  }
}

export const getAnimeById = async (id: Anime["id"]): Promise<Anime> => {
  if (!animeList.value.length) {
    await fetchAnimeList();
  }

  const anime = animeList.value.find(
    (anime) => anime.id.toString() === id.toString(),
  );

  if (!anime) {
    throw new AnimeNotFoundError();
  }

  return anime;
};
