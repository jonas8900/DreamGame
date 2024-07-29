import GameListContent from "@/components/contentboxes/GameListContent";
import PageHead from "@/components/head/PageHead";
import NavigationBar from "@/components/navigation/NavigationBar";

export default function gamelist() {
    return(
        <>
        <PageHead pageheadline={"Spiele Liste"}/>
        <GameListContent/>
        <NavigationBar/>
        </>
    )
}