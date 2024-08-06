
import { RawData } from "@/rawdata";
import Image from "next/image";
import { styled } from "styled-components";
import { Favorite } from "@mui/icons-material";
import MoreInformationButton from "../buttons/MoreInformationButton";

export default function FavoritesContent({setFavoriteGameId, favoriteGameId}) {

    const favoriteGames = RawData.filter((game) => favoriteGameId.includes(game.id));


    function handleAddToFavorites(gameId) {
        if(favoriteGameId.includes(gameId)) {
            return;
        } else {
            setFavoriteGameId([...favoriteGameId, gameId]);
        }
    }
    
    function handleRemoveFromFavorites(gameId) {
        const newFavoriteGameId = favoriteGameId.filter((id) => id !== gameId);
        alert("Spiel wurde aus den Favoriten entfernt");
        setFavoriteGameId(newFavoriteGameId);
    }



    return (
        <main>
        {favoriteGames.map((game) => (
            <StyledContentDiv key={game.id}>
                <StyledImage src={game.image} alt="Game of the Day" width={500} height={300}/>
                <StyledTextContainer>
                    <StyledHeadWrapper>
                        <StyledHeadline>{game.name}</StyledHeadline>
                        {favoriteGameId.includes(game.id) ? 
                             <StyledFavoriteIconClicked onClick={() => handleRemoveFromFavorites(game.id)}/> : 
                             <StyledFavoriteIconNotClicked onClick={() => handleAddToFavorites(game.id)}/>
                        }
                    </StyledHeadWrapper>
                    <StyledSecondHeadline>{game.gametype}</StyledSecondHeadline>
                </StyledTextContainer>
                <MoreInformationButton>Mehr infos</MoreInformationButton>
            </StyledContentDiv>
        ))}
</main>
    )
}


const StyledContentDiv = styled.div`
    border-radius: 4px; 
    background-color: var(--lightgreen-color);
    margin: auto 1rem 5rem 1rem;
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