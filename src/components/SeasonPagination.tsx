import type { Season } from "@/types/Season";

interface SeasonPaginationProps {
  readonly seasons: Season[];
  readonly onSeasonChange: (seasonId: Season["id"]) => void;
}

export function SeasonPagination({
  seasons,
  onSeasonChange,
}: SeasonPaginationProps) {
  return (
    <div className="flex justify-center items-center gap-2">
      <span className="text-lg">Сезон</span>
      <div className="join">
        {seasons.map((season) => (
          <input
            aria-label={`${season.number}`}
            className="join-item btn btn-md"
            key={season.id}
            name="season-radio"
            onChange={() => onSeasonChange(season.id)}
            type="radio"
          />
        ))}
      </div>
    </div>
  );
}
