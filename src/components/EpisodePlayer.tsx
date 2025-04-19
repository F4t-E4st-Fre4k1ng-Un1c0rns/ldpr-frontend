import type { Episode } from "@/types/Episode";
import { useState } from "preact/hooks";

interface EpisodePlayerProps {
  readonly episodes: Episode[];
}

export function EpisodePlayer({ episodes }: EpisodePlayerProps) {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <ul className="w-full md:w-1/4 p-4 overflow-y-auto menu menu-lg bg-base-200 rounded-lg md:max-h-full max-h-50 flex-nowrap">
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

      <div className="w-full md:w-3/4 h-content">
        {selectedEpisode ? (
          <div className="h-max bg-gray-200 rounded-lg overflow-hidden">
            <video
              autoPlay
              className="w-full aspect-video object-contain"
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
