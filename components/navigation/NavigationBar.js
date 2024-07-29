import styled from "styled-components";
import { ExploreOutlined } from "@mui/icons-material";
import { List } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { NewReleases } from "@mui/icons-material";
import { SportsEsports } from "@mui/icons-material";
import Link from "next/link";

export default function NavigationBar() {



    return(
        <StyledNav>
            <StyledIconWrapper>
                <Link href=""><StyledExploreIcon></StyledExploreIcon></Link>
                <StyledParagraph>Entdecken</StyledParagraph>
            </StyledIconWrapper>

            <StyledIconWrapper>
                <Link href="/gamelist"><StyledListIcon></StyledListIcon></Link>
                <StyledParagraph>Spielerliste</StyledParagraph>
            </StyledIconWrapper>
        
            <StyledIconWrapper>
                <Link href="/"><StyledHomeIcon></StyledHomeIcon></Link>
                <StyledParagraph>Home</StyledParagraph>
            </StyledIconWrapper>

            <StyledIconWrapper>
                <Link href="/newgames"><StyledNewReleasesIcon></StyledNewReleasesIcon></Link>
                <StyledParagraph>Neuste Spiele</StyledParagraph>
            </StyledIconWrapper>

            <StyledIconWrapper>
                <Link href="/favorites"><StyledSportsEsportsIcon></StyledSportsEsportsIcon></Link>
                <StyledParagraph>Favoriten</StyledParagraph>
            </StyledIconWrapper>

        </StyledNav>
    )
}

const StyledNav = styled.nav`
    border: 1px solid black;
    position: fixed; 
    border: none; 
    background-color: #FFFFFF;
    bottom: 0; 
    width: 100%; 
    padding: 0.6rem;
    display: flex;
    justify-content: space-around;

`;

const StyledExploreIcon = styled(ExploreOutlined)`
    color: var(--darkgrey-color);
    font-size: 2rem;
    &:active {  
        color: var(--darkorange-color);
    }
`;

const StyledListIcon = styled(List)`
    color: var(--darkgrey-color);
    font-size: 2rem;
    &:active {  
        color: var(--darkorange-color);
    }
`;

const StyledHomeIcon = styled(Home)`
    color: var(--darkgrey-color);
    font-size: 2rem;
    &:active {  
        color: var(--darkorange-color);
    }
`;

const StyledNewReleasesIcon = styled(NewReleases)`
    color: var(--darkgrey-color);
    font-size: 2rem;
    &:active {  
        color: var(--darkorange-color);
    }
`;

const StyledSportsEsportsIcon = styled(SportsEsports)`
    color: var(--darkgrey-color);
    font-size: 2rem;
    &:active {  
        color: var(--darkorange-color);
    }
`;

const StyledParagraph = styled.p`
    color: var(--darkgrey-color);
    font-size: 10px;
    margin: 0;
`;

const StyledIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

`;
