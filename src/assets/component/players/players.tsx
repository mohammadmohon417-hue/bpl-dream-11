
import { use } from "react";
import type { Player } from "../../type/players";
import AvailablePlayers from "./availablePlayers";
interface playersProps {
    playersPromise: Promise<Player[]>;
}



const Players = ({ playersPromise }: playersProps) => {
    const players=use(playersPromise);
    console .log(players);
    
    return (
        <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-8">

  {/* Section Header */}
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">

    {/* Title */}
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Available Players
        </h1>

        <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
          {players.length} Players
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Choose your favorite players and build your dream team.
      </p>
    </div>

    {/* Toggle Buttons */}
    <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1 shadow-sm">

      <button
        className="
          px-5 py-2.5
          rounded-lg
          bg-yellow-400
          text-black
          font-semibold
          text-sm
          shadow-sm
          hover:bg-yellow-300
          transition-all
          duration-200
        "
      >
        Available
      </button>

      <button
        className="
          px-5 py-2.5
          rounded-lg
          text-gray-500
          font-semibold
          text-sm
          hover:bg-gray-100
          hover:text-gray-900
          transition-all
          duration-200
        "
      >
        Selected
      </button>

    </div>

  </div>


  {/* Players */}
  <AvailablePlayers players={players} />

</div>
    );
}

export default Players;