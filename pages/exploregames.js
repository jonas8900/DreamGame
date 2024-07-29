import ExploreGamesContent from "@/components/contentboxes/ExploreGamesContent";
import PageHead from "@/components/head/PageHead";
import NavigationBar from "@/components/navigation/NavigationBar";

export default function exploregames({setFavoriteGameId, favoriteGameId}) {
    return (
        <>
        <PageHead pageheadline={"Spiele Entdecken"}/>
        <ExploreGamesContent setFavoriteGameId={setFavoriteGameId} favoriteGameId={favoriteGameId}/>
        <NavigationBar/>
        </>
    )
}