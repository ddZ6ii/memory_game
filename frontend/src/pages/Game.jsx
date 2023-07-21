import { useState, useEffect } from "react";

import GridCards from "../components/GridCards";
import Stats from "../components/Stats";

export default function Game() {
  const [moves, setMoves] = useState(0);

  const handleMoves = () => setMoves((prev) => prev + 1);

  return (
    <section className="min-h-[calc(100dvh)] md:min-h-[calc(100dvh)]">
      <h1>Game</h1>
      <div className="grid__wrapper">
        <GridCards incrementMoves={handleMoves} />
      </div>
      <Stats moves={moves} />
    </section>
  );
}
