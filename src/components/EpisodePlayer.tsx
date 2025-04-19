import type { Episode } from "@/types/Episode";
import { useState } from "preact/hooks";

interface EpisodePlayerProps {
  readonly episodes: Episode[];
}

export function EpisodePlayer({ episodes }: EpisodePlayerProps) {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  return (
    <div className="flex flex-col md:flex-row h-full gap-4">
      <ul className="w-full md:w-1/4 p-4 overflow-y-auto menu menu-lg bg-base-200 rounded-lg max-h-full">
        {episodes.map((episode) => (
          <li key={episode.id}>
            <button
              className={`w-full text-ellipsis line-clamp-1 ${selectedEpisode?.id === episode.id ? "menu-active" : ""}`}
              onClick={() => setSelectedEpisode(episode)}
            >
              {episode.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="w-full md:w-3/4 h-full">
        {selectedEpisode ? (
          <div className="h-full bg-gray-200 rounded-lg overflow-hidden">
            <video
              autoPlay
              className="w-full h-full object-contain"
              controls
              src={selectedEpisode.path}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Выберите эпизод
          </div>
        )}
      </div>
    </div>
  );
}
