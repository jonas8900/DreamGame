import GameContent from "@/components/contentboxes/GameContent";
import PageHead from "@/components/head/PageHead";
import NavigationBar from "@/components/navigation/NavigationBar";
import styled from "styled-components";

export default function Home({
  setFavoriteGameId,
  favoriteGameId,
  currentGameId,
  setCurrentGameId,
}) {
  return (
    <>
      <PageHead pageheadline={"Spiel des Tages"} />
      <GameContent
        setFavoriteGameId={setFavoriteGameId}
        favoriteGameId={favoriteGameId}
        currentGameId={currentGameId}
        setCurrentGameId={setCurrentGameId}
      />
      <NavigationBar />
    </>
  );
}

