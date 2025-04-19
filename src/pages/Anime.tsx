import { useEffect, useState } from "preact/hooks";
import type { Anime } from "@/types/Anime";
import { getAnimeById } from "@/store/anime";

const Anime = ({ id }: { readonly id: string }) => {
  const [anime, setAnime] = useState<Anime | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchAnime = async () => {
      try {
        const data = await getAnimeById(id);
        setAnime(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load anime");
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [id]);

  if (!id) {
    return <div>Anime ID is required</div>;
  }

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
    return (
      <div className="container mx-auto p-4">
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      </div>
    );
  }

  if (!anime) {
    return <div>Anime not found</div>;
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
