import { Anime } from "@/types/Anime";
import AnimeListItem from "@/components/AnimeListItem";

const AnimeList = () => {
  // This would normally come from an API or state management
  const mockAnime: Anime[] = [
    {
      description:
        "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
      id: "1",
      image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
      title: "Attack on Titan",
    },
    {
      description:
        "A high school student discovers a supernatural notebook that allows him to kill anyone by writing the victim's name while picturing their face.",
      id: "2",
      image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      title: "Death Note",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Популярное</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockAnime.map((anime) => (
          <AnimeListItem anime={anime} key={anime.id} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
