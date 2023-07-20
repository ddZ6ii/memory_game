import GridCards from "../components/GridCards";
import Stats from "../components/Stats";

export default function Game() {
  return (
    <section className="min-h-[calc(100dvh)] md:min-h-[calc(100dvh)]">
      <h1>Game</h1>
      <div className="grid__wrapper">
        <GridCards />
      </div>
      <Stats />
    </section>
  );
}
