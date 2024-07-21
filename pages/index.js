import GameOfTheDayContent from "@/components/contentboxes/GameOfTheDayContent";
import PageHead from "@/components/head/PageHead";
import NavigationBar from "@/components/navigation/NavigationBar";
import styled from "styled-components"


export default function Home() {
    return (
    <>
    <PageHead pageheadline={"Spiel des Tages"}/>
    <GameOfTheDayContent/>
    <NavigationBar/>
    </>
    )
}