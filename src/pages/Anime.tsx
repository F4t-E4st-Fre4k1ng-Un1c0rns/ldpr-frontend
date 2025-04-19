import { useEffect, useState } from "preact/hooks";
import type { Anime } from "@/types/Anime";
import { DisplayError } from "@/types/ErrorDisplay";
import type { Episode } from "@/types/Episode";
import { EpisodePlayer } from "@/components/EpisodePlayer";
import ErrorDisplay from "@/components/ErrorDisplay";
import type { Season } from "@/types/Season";
import { SeasonPagination } from "@/components/SeasonPagination";
import { getAnimeById } from "@/store/anime";
import { getSeasonsByAnimeId } from "@/store/seasons";

const Anime = ({ id }: { readonly id: number }) => {
  const [anime, setAnime] = useState<Anime | null>(null);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [selectedSeasonId, setSelectedSeasonId] = useState<Season["id"] | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<DisplayError | null>(null);
  const [seasonsError, setSeasonsError] = useState<DisplayError | null>(null);
  const [episodesError, setEpisodesError] = useState<DisplayError | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError(new DisplayError("Нужен ID", 404));
      return;
    }

    getAnimeById(id)
      .then((data) => {
        setAnime(data);
        return getSeasonsByAnimeId(id);
      })
      .then((seasonsData) => {
        setSeasons(seasonsData);
        if (seasonsData.length > 0) {
          setSelectedSeasonId(seasonsData[0].id);
        }
      })
      .catch((err) => {
        setSeasonsError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!selectedSeasonId) return;

    setEpisodesError(null);
    setEpisodes(
      seasons.find((season) => season.id === selectedSeasonId)?.episodes ?? [],
    );
  }, [selectedSeasonId]);

  const handleSeasonChange = (seasonId: number) => {
    setSelectedSeasonId(seasonId);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (!anime) {
    return <ErrorDisplay error={new DisplayError("Аниме не найдено", 404)} />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row gap-4 mb-4">
        <img
          alt={anime.title}
          className="object-contain w-96"
          src={anime.image}
        />
        <div className="card-body">
          <h1 className="card-title text-4xl">{anime.title}</h1>
          <p className="text-lg">{anime.description}</p>
        </div>
      </div>

      {seasonsError ? (
        <ErrorDisplay error={seasonsError} />
      ) : seasons.length > 0 ? (
        <div className="mb-4">
          <SeasonPagination
            onSeasonChange={handleSeasonChange}
            seasons={seasons}
            selectedSeason={selectedSeasonId}
          />
        </div>
      ) : null}

      {episodesError ? (
        <ErrorDisplay error={episodesError} />
      ) : episodes.length > 0 ? (
        <div className="h-[600px]">
          <EpisodePlayer episodes={episodes} />
        </div>
      ) : null}
    </div>
  );
};

export default Anime;
