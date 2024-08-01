import styled from "styled-components";
import { ExploreOutlined } from "@mui/icons-material";
import { List } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { NewReleases } from "@mui/icons-material";
import { SportsEsports } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";


export default function NavigationBar() {
    const router = useRouter();
    const pathname = router.pathname;
    const routeToPathExplore = "/exploregames";
    const routeToPathGameList = "/gamelist";
    const routeToPathHome = "/";
    const routeToPathNewGames = "/newgames";
    const routeToPathFavorites = "/favorites";


    return (
        <StyledNav>
            <StyledIconWrapper>
                <Link href={routeToPathExplore}>
                    <StyledExploreIcon active={pathname === routeToPathExplore ? 1 : 0} />
                </Link>
                <StyledParagraph>Entdecken</StyledParagraph>
            </StyledIconWrapper>

            <StyledIconWrapper>
                <Link href={routeToPathGameList}>
                    <StyledListIcon active={pathname === routeToPathGameList ? 1 : 0} />
                </Link>
                <StyledParagraph>Spielerliste</StyledParagraph>
            </StyledIconWrapper>
        
            <StyledIconWrapper>
                <Link href={routeToPathHome}>
                    <StyledHomeIcon active={pathname === routeToPathHome ? 1 : 0} />
                </Link>
                <StyledParagraph>Home</StyledParagraph>
            </StyledIconWrapper>

            <StyledIconWrapper>
                <Link href={routeToPathNewGames}>
                    <StyledNewReleasesIcon active={pathname === routeToPathNewGames ? 1 : 0} />
                </Link>
                <StyledParagraph>Neuste Spiele</StyledParagraph>
            </StyledIconWrapper>

            <StyledIconWrapper>
                <Link href={routeToPathFavorites}>
                    <StyledSportsEsportsIcon active={pathname === routeToPathFavorites ? 1 : 0} />
                </Link>
                <StyledParagraph>Favoriten</StyledParagraph>
            </StyledIconWrapper>
        </StyledNav>
    );
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
    z-index: 99;
`;

const StyledExploreIcon = styled(ExploreOutlined)`
    color: ${props => props.active ? 'var(--darkorange-color)' : 'var(--darkgrey-color)'};
    font-size: 2rem;
    &:active {  
        color: var(--darkorange-color);
    }
`;

const StyledListIcon = styled(List)`
    color: ${props => props.active ? 'var(--darkorange-color)' : 'var(--darkgrey-color)'};
    font-size: 2rem;
    &:active {  
        color: var(--darkorange-color);
    }
`;

const StyledHomeIcon = styled(Home)`
    color: ${props => props.active ? 'var(--darkorange-color)' : 'var(--darkgrey-color)'};
    font-size: 2rem;
    &:active {  
        color: var(--darkorange-color);
    }
`;

const StyledNewReleasesIcon = styled(NewReleases)`
    color: ${props => props.active ? 'var(--darkorange-color)' : 'var(--darkgrey-color)'};
    font-size: 2rem;
    &:active {  
        color: var(--darkorange-color);
    }
`;

const StyledSportsEsportsIcon = styled(SportsEsports)`
    color: ${props => props.active ? 'var(--darkorange-color)' : 'var(--darkgrey-color)'};
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
