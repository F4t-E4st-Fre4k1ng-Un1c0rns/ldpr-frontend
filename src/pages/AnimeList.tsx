import AnimeListItem from "@/components/AnimeListItem";
import { animeList } from "@/store/anime";

const AnimeList = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Популярное</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {animeList.value.map((anime) => (
          <AnimeListItem anime={anime} key={anime.id} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
