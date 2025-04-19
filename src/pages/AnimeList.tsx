import { useEffect, useState } from "preact/hooks";
import type { Anime } from "@/types/Anime";
import AnimeListItem from "@/components/AnimeListItem";
import { DisplayError } from "@/types/ErrorDisplay";
import ErrorDisplay from "@/components/ErrorDisplay";
import { fetchAnimeList } from "@/store/anime";

const AnimeList = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<undefined | DisplayError>();

  useEffect(() => {
    fetchAnimeList()
      .then((data) => {
        setAnimeList(data || []);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Популярное</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((__, index) => (
            <div
              className="card card-side bg-base-200 shadow-xl max-h-50"
              key={index}
            >
              <div className="skeleton w-30 h-full"></div>
              <div className="card-body w-full">
                <div className="skeleton h-6 w-3/4 mb-2"></div>
                <div className="skeleton h-4 w-full mb-1"></div>
                <div className="skeleton h-4 w-full mb-1"></div>
                <div className="skeleton h-4 w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Популярное</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {animeList.map((anime) => (
          <AnimeListItem anime={anime} key={anime.id} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
