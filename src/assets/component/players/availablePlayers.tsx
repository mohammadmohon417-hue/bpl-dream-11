import type { Player } from "../../type/players";

const AvailablePlayers = ({ players }: { players: Player[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player: Player, index: number) => (
        <div
          key={player.playerName || index}
          className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="relative h-64 bg-gradient-to-br from-gray-100 via-white to-yellow-100 overflow-hidden">
            <div className="absolute top-3 left-3 z-10">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black text-white">
                {player.playerType}
              </span>
            </div>

            <div className="absolute top-3 right-3 z-10">
              <div className="flex items-center gap-1 bg-yellow-400 text-black px-3 py-1.5 rounded-full text-sm font-bold shadow">
                🪙 {player.price}
              </div>
            </div>

            <img
              src={player.playerImage}
              alt={player.playerName || "Player"}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>

          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-900">
              {player.playerName || "Player Name"}
            </h2>

            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
              <img  className="height-[100px] w-[50px]" src="https://cdn.britannica.com/67/6267-050-8A26DFEE/Flag-Bangladesh.jpg" alt="flag" />
              <span>{player.origin}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400">Batting</p>
                <p className="text-sm font-semibold text-gray-800 mt-1">
                  {player.battingStyle}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400">Bowling</p>
                <p className="text-sm font-semibold text-gray-800 mt-1">
                  {player.bowlingStyle}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 my-5"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Player Price</p>
                <p className="text-lg font-bold text-gray-900">
                  {player.price} Coins
                </p>
              </div>

              <button className="px-5 py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
