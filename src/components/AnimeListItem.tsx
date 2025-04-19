import { Anime } from "@/types/Anime";
import { Link } from "preact-router/match";

interface AnimeListItemProps {
  readonly anime: Anime;
}

const AnimeListItem = ({ anime }: AnimeListItemProps) => {
  return (
    <>
      {/* @ts-expect-error seems like error in preact-router types */}
      <Link href={`/anime/${anime.id}`}>
        <div className="card card-side bg-base-200 shadow-xl max-h-50">
          <img
            alt={anime.title}
            className="object-contain w-30"
            src={anime.image}
          />
          <div></div>
          <div className="card-body w-full">
            <h2 className="card-title">{anime.title}</h2>
            <p className="line-clamp-3">{anime.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AnimeListItem;
