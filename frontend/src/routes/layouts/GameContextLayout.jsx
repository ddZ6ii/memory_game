import { Outlet } from "react-router-dom";
import { GameContextProvider } from "../../contexts/GameContext";

export default function GameContextLayout() {
  return (
    <GameContextProvider>
      <Outlet />
    </GameContextProvider>
  );
}
