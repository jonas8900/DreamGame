
import FavoritesContent from "@/components/contentboxes/FavoritesContent";
import PageHead from "@/components/head/PageHead";
import NavigationBar from "@/components/navigation/NavigationBar";


export default function favorites({setFavoriteGameId, favoriteGameId}) {
    return (
        <>
        <PageHead pageheadline={"Favoriten"}/>
        <FavoritesContent setFavoriteGameId={setFavoriteGameId} favoriteGameId={favoriteGameId}/>
        <NavigationBar/>
        </>
    )
}