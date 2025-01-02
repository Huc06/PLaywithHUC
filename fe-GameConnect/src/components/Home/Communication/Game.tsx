const link = "public/Services/";

const games = [
  {
    id: "OMNIZOME",
    name: "OMNIZOME",
    image: link + "game5.png",
  },
  {
    id: "ZONE NINE",
    name: "ZONE NINE",
    image: link + "game1.png",
  },
  {
    id: "ONCHAIN CLASH",
    name: "ONCHAIN CLASH",
    image: link + "game2.png",
  },
  {
    id: "STELLAR FORGER",
    name: "STELLAR FORGER",
    image: link + "game3.png",
  },
  {
    id: "MASTER DUEL",
    name: "MASTER DUEL",
    image: link + "game4.png",
  },
];

const Game = () => {
  return (
    <div className="flex gap-4 justify-center items-center font-bangers text-3xl">
      {games.map((game) => (
        <button
          key={game.id}
          className="flex-shrink-0 relative rounded-lg overflow-hidden group hover:ring-2 hover:ring-purple-500 transition-all"
        >
          <img
            src={game.image}
            alt={game.name}
            className="w-[200px] h-[170px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-sm font-medium">{game.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Game;
