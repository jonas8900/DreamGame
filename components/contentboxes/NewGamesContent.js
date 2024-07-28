import { RawData } from "@/rawdata";
import Image from "next/image";
import { styled } from "styled-components";
import { Group } from "@mui/icons-material";
import { Public } from "@mui/icons-material";
import { FiberNew } from "@mui/icons-material";
import { Euro } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { useState } from "react";

export default function NewGameContent() {
    const [clickedId, setClickedId] = useState([]);
    
    function handleFavoriteButton(id) {
        if (RawData.find((game) => game.id === id)) {
            if (clickedId.includes(id)) {
                setClickedId(clickedId.filter((gameId) => gameId !== id));
            } else {
                setClickedId([...clickedId, id]);
            }
        }
    }

    return(
        <main>
                {RawData.map((game) => (
                    <StyledContentDiv key={game.id}>
                        <StyledImage src={game.image} alt="Game of the Day" width={500} height={300}/>
                        <StyledTextContainer>
                            <StyledHeadWrapper>
                                <StyledHeadline>{game.name}</StyledHeadline>
                                {clickedId.includes(game.id)? 
                                <StyledFavoriteIconClicked onClick={() => handleFavoriteButton(game.id)}/> : 
                                <StyledFavoriteIconNotClicked onClick={() => handleFavoriteButton(game.id)}/>}
                            </StyledHeadWrapper>
                            <StyledSecondHeadline>{game.gametype}</StyledSecondHeadline>
                            <StyledLine/>
                            <StyledInformationWrapper>
                                <StyledGroupIcon/>
                                <StyledInfomationParagraph>{game.mode}</StyledInfomationParagraph>
                            </StyledInformationWrapper>
                            <StyledInformationWrapper>
                                <StyledPublicIcon/>
                                <StyledInfomationParagraph>{game.onlinePlayerCount} Spieler online</StyledInfomationParagraph>
                            </StyledInformationWrapper>
                            <StyledInformationWrapper>
                                <StyledFiberNewIcon/>
                                <StyledInfomationParagraph>Release: {game.releaseDate}</StyledInfomationParagraph>
                            </StyledInformationWrapper>
                            <StyledInformationWrapper>
                                <StyledEuroIcon/>
                                <StyledInfomationParagraph>Preis {game.price} €</StyledInfomationParagraph>
                            </StyledInformationWrapper>
                        </StyledTextContainer>
                    </StyledContentDiv>
                ))}
        </main>
    )
}

const StyledContentDiv = styled.div`
    border-radius: 4px; 
    background-color: var(--lightgreen-color);
    margin: auto 1rem 5rem 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
`;

const StyledImage = styled(Image)`
    border-radius: 4px;
    width: 100%;
    object-fit: contain;
    margin: 0 auto;
    height: 100%;
`;

const StyledTextContainer = styled.div`
    padding-left: 2rem; 
    padding-right: 2rem;
`;

const StyledSecondHeadline = styled.h2`
    font-size: 1rem;
    color: var(--darkgrey-color);
    font-weight: 500;
    margin: 0 0 0.5rem 0;
`;

const StyledHeadline = styled.h1`
    font-size: 1.4rem;
    color: var(--darkgrey-color);
`;

const StyledFiberNewIcon = styled(FiberNew)`
    width: 33px;
    height: 33px;
    color: var(--darkgrey-color);
`;

const StyledLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--darkgrey-color);
    height: 1px;
`;


const StyledInformationWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
`;

const StyledGroupIcon = styled(Group)`    
    width: 33px;
    height: 33px;
    color: var(--darkgrey-color);
`;

const StyledInfomationParagraph = styled.p`
    font-size: 14px;
    color: var(--darkgrey-color);
    font-weight: 400;
`;

const StyledPublicIcon = styled(Public)`
    width: 33px;
    height: 33px;
    color: var(--darkgrey-color);
`;

const StyledEuroIcon = styled(Euro)`
    width: 33px;
    height: 33px;
    color: var(--darkorange-color);
`;

const StyledFavoriteIconClicked = styled(Favorite)`
    font-size: 2rem;
    fill: var(--darkorange-color);
`;

const StyledFavoriteIconNotClicked = styled(Favorite)`
    font-size: 2rem;
    fill: transparent;
    stroke: var(--darkorange-color);
`;

const StyledHeadWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;