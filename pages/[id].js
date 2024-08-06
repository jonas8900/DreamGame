import GameContent from "@/components/contentboxes/GameContent";
import PageHead from "@/components/head/PageHead";
import NavigationBar from "@/components/navigation/NavigationBar";

export default function GameId({setFavoriteGameId, favoriteGameId, currentGameId, setCurrentGameId}) {



    return (
        <>
        <PageHead pageheadline={"Spieldetails"} />
        <GameContent
          setFavoriteGameId={setFavoriteGameId}
          favoriteGameId={favoriteGameId}
          currentGameId={currentGameId}
          setCurrentGameId={setCurrentGameId}
        />
        <NavigationBar />
      </>
    )
}