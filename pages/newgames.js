import NewGameContent from "@/components/contentboxes/NewGamesContent";
import PageHead from "@/components/head/PageHead";
import NavigationBar from "@/components/navigation/NavigationBar";

export default function newgames({setFavoriteGameId, favoriteGameId}) {
    return (
        <>
        <PageHead pageheadline={"Neuste Spiele"}/>
        <NewGameContent setFavoriteGameId={setFavoriteGameId} favoriteGameId={favoriteGameId}/>
        <NavigationBar/>
        </>
    )
}