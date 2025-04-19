import type { Anime } from "@/types/Anime";

interface AnimeProps {
  readonly anime: Anime;
}

const Anime = ({ anime }: AnimeProps) => {
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
