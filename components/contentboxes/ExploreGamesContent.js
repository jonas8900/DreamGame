import { RawData } from "@/rawdata";
import Image from "next/image";
import { styled } from "styled-components";
import { Cancel, Group } from "@mui/icons-material";
import { Public } from "@mui/icons-material";
import { FiberNew } from "@mui/icons-material";
import { Euro } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { Computer } from "@mui/icons-material";
import { ThumbsUpDown } from "@mui/icons-material";
import MoreInformationButton from "../buttons/MoreInformationButton";
import { CheckCircle } from "@mui/icons-material";


export default function ExploreGamesContent({setFavoriteGameId, favoriteGameId}) {

    const randomNumber = 2;

    function handleAddToFavorites(gameId) {
        if(favoriteGameId.includes(gameId)) {
            return;
        } else {
            setFavoriteGameId([...favoriteGameId, gameId]);
        }
    }
    
    function handleRemoveFromFavorites(gameId) {
        const newFavoriteGameId = favoriteGameId.filter((id) => id !== gameId);
        setFavoriteGameId(newFavoriteGameId);
    }


    return(
        <main>
        <StyledContentDiv>
            <StyledImage src={RawData[randomNumber].image} alt="Game of the Day" width={500} height={300}/>
            <StyledTextContainer>
                <StyledHeadlineDiv>
                <StyledHeadline>{RawData[randomNumber].name}</StyledHeadline>
                {favoriteGameId.includes(RawData[randomNumber].id) ? 
                    <StyledFavoriteIconClicked onClick={() => handleRemoveFromFavorites(RawData[randomNumber].id)}/> : 
                    <StyledFavoriteIconNotClicked onClick={() => handleAddToFavorites(RawData[randomNumber].id)}/>
                }
                </StyledHeadlineDiv>
                <StyledSecondHeadline>{RawData[randomNumber].gametype}</StyledSecondHeadline>
                <StyledPlattformsWrapper>
                {RawData[randomNumber].plattform.map((plattformtype, index) => {
                        switch(plattformtype) {
                            case "PC":
                                return (
                                    <StyledPlattformWrapper key={index}>
                                        <StyledComputerIcon />
                                        <StyledPlattformParagraph>PC</StyledPlattformParagraph>
                                    </StyledPlattformWrapper>
                                );
                            case "PlayStation 5":
                                return (
                                    <StyledPlattformWrapper key={index}>
                                        <Image src="/icons/icons8-playstation.svg" alt="Playstation Logo" width={33} height={33} />
                                        <StyledPlattformParagraph>PlayStation 5</StyledPlattformParagraph>
                                    </StyledPlattformWrapper>
                                );
                            case "Xbox One":
                                return (
                                    <StyledPlattformWrapper key={index}>
                                        <Image src="/icons/icons8-xbox.svg" alt="Xbox Logo" width={33} height={33} />
                                        <StyledPlattformParagraph>Xbox One</StyledPlattformParagraph>
                                    </StyledPlattformWrapper>
                                );
                            case "Nintendo Switch":
                                return (
                                    <StyledPlattformWrapper key={index}>
                                        <Image src="/icons/icons8-nintendo-switch-logo.svg" alt="Nintendo Switch Logo" width={36} height={36} />
                                        <StyledPlattformParagraph>Nintendo Switch</StyledPlattformParagraph>
                                    </StyledPlattformWrapper>
                                );
                            default:
                                return null;
                        }
                    })}
                </StyledPlattformsWrapper>
                <StyledInformationWrapper>
                    <StyledGroupIcon/>
                    <StyledInfomationParagraph>{RawData[randomNumber].mode}</StyledInfomationParagraph>
                </StyledInformationWrapper>
                <StyledInformationWrapper>
                    <StyledPublicIcon/>
                    <StyledInfomationParagraph>{RawData[randomNumber].onlinePlayerCount} Spieler online</StyledInfomationParagraph>
                </StyledInformationWrapper>
                <StyledInformationWrapper>
                    <StyledThumbsUpDownIcon/>
                    <StyledInfomationParagraph>{RawData[randomNumber].rating} <br/>von {RawData[randomNumber].ratingCount} bewertet</StyledInfomationParagraph>
                </StyledInformationWrapper>
                <StyledInformationWrapper>
                    <StyledFiberNewIcon/>
                    <StyledInfomationParagraph>Release: {RawData[randomNumber].releaseDate}</StyledInfomationParagraph>
                </StyledInformationWrapper>
                <StyledInformationWrapper>
                    <StyledEuroIcon/>
                    <StyledInfomationParagraph>Preis {RawData[randomNumber].price} €</StyledInfomationParagraph>
                </StyledInformationWrapper>
            </StyledTextContainer>
            <MoreInformationButton/>
        </StyledContentDiv>
        <StyledRatingDiv>
            <StyledCheckCircleIcon/>
            {favoriteGameId.includes(RawData[randomNumber].id) ? 
                    <StyledFavoriteIconClicked onClick={() => handleRemoveFromFavorites(RawData[randomNumber].id)}/> : 
                    <StyledFavoriteIconNotClicked onClick={() => handleAddToFavorites(RawData[randomNumber].id)}/>
                }
            <StyledCloseCircleIcon/>
        </StyledRatingDiv>
    </main>
)
}

const StyledHeadlineDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledHeadline = styled.h1`
    font-size: 1.4rem;
    color: var(--darkgrey-color);
    margin-bottom: 0rem;
`;

const StyledSecondHeadline = styled.h2`
    font-size: 1rem;
    color: var(--darkgrey-color);
    font-weight: 500;
    margin: 0 0 0.2rem 0;
`;


const StyledContentDiv = styled.div`
    border-radius: 4px; 
    background-color: var(--lightgreen-color);
    margin: auto 1rem 1rem 1rem;
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

const StyledPlattformsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top: 1px solid var(--darkgrey-color);   
    border-bottom: 1px solid var(--darkgrey-color);
`;

const StyledPlattformWrapper = styled.div`
    display: flex;
    flex-direction: column ;
    gap: 0; 
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const StyledPlattformParagraph = styled.p`
    margin: 0;
    padding: 0;
    font-size: 8px;
    color: var(--darkgrey-color);
`;

const StyledComputerIcon = styled(Computer)` 
    width: 33px;
    height: 33px;
    color: var(--darkgrey-color);

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

const StyledThumbsUpDownIcon = styled(ThumbsUpDown)`
    width: 33px;
    height: 33px;
    color: var(--darkgrey-color);
`;

const StyledFiberNewIcon = styled(FiberNew)`
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

const StyledRatingDiv = styled.div`
    border-radius: 45px;
    background-color: var(--darkgrey-color);
    height: 4.6rem;
    margin:  1rem 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledCheckCircleIcon = styled(CheckCircle)`
    width: 57px;
    height: 57px;
    color: #7beda7;
    margin: auto auto auto 1rem;

    &:active {
       
        color: #7cb28e;
    }
`;

const StyledCloseCircleIcon = styled(Cancel)`
    width: 57px;
    height: 57px;
    color: #ff4d40;
    margin: auto 1rem auto auto;

    &:active {
        color: #d4822f;
    }
`;