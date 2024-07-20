import PageHead from "@/components/head/PageHead";
import styled from "styled-components"


export default function Home() {
    return (
    <>
    <PageHead pageheadline={"Spiel des Tages"}/>
    <StyledHeadline>Homepage</StyledHeadline>
    </>
    )
}


const StyledHeadline = styled.h1`
color: green;
`;