import GameListContent from "@/components/contentboxes/GameListContent";
import PageHead from "@/components/head/PageHead";
import NavigationBar from "@/components/navigation/NavigationBar";

export default function gamelist({setFavoriteGameId, favoriteGameId, currentGameId, setCurrentGameId}) {
    return(
        <>
        <PageHead pageheadline={"Spiele Liste"}/>
        <GameListContent  setFavoriteGameId={setFavoriteGameId} favoriteGameId={favoriteGameId} currentGameId={currentGameId}
        setCurrentGameId={setCurrentGameId}/>
        <NavigationBar/>
        </>
    )
}