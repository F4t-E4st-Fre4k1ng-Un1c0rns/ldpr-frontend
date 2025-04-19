import { AnimeOutput, SeasonOutput } from "@/types/api";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export const api = {
  anime: {
    getAll: async (): Promise<AnimeOutput> => {
      const response = await fetch(`${API_BASE_URL}/anime`);
      if (!response.ok) {
        throw new Error("Failed to fetch anime list");
      }
      return response.json();
    },
    getSeasons: async (id: number): Promise<SeasonOutput> => {
      const response = await fetch(`${API_BASE_URL}/season/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch seasons");
      }
      return response.json();
    },
  },
};
