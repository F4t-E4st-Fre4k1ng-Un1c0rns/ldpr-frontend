import { useEffect, useState } from "preact/hooks";
import type { Anime } from "@/types/Anime";
import { DisplayError } from "@/types/ErrorDisplay";
import ErrorDisplay from "@/components/ErrorDisplay";
import { getAnimeById } from "@/store/anime";

const Anime = ({ id }: { readonly id: string }) => {
  const [anime, setAnime] = useState<Anime | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<DisplayError | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError(new DisplayError("Нужен ID", 404));
      return;
    }

    getAnimeById(id)
      .then((data) => {
        setAnime(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

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
      <div className="card card-side bg-base-200 shadow-xl">
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
    </div>
  );
};

export default Anime;
