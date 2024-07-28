
import FavoritesContent from "@/components/contentboxes/FavoritesContent";
import PageHead from "@/components/head/PageHead";
import NavigationBar from "@/components/navigation/NavigationBar";


export default function favorites() {
    return (
        <>
        <PageHead pageheadline={"Neuste Spiele"}/>
        <FavoritesContent/>
        <NavigationBar/>
        </>
    )
}