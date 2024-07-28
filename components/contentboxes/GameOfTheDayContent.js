import Image from "next/image";
import { RawData } from "@/rawdata";
import styled from "styled-components";
import { Computer } from "@mui/icons-material";
import { Group } from "@mui/icons-material";
import { Public } from "@mui/icons-material";
import { ThumbsUpDown } from "@mui/icons-material";
import { FiberNew } from "@mui/icons-material";
import { Euro } from "@mui/icons-material";
import MoreInformationButton from "../buttons/MoreInformationButton";

export default function GameOfTheDayContent() {
    
    
    function handleRandomNumber() {
        // return Math.floor(Math.random() * RawData.length);
        return 2;
    }

    const randomNumber = handleRandomNumber();
    
    return(
        <main>
            <StyledContentDiv>
                <StyledImage src={RawData[randomNumber].image} alt="Game of the Day" width={500} height={300}/>
                <StyledTextContainer>
                    <StyledHeadline>{RawData[randomNumber].name}</StyledHeadline>
                    <StyledSecondHeadline>{RawData[randomNumber].gametype}</StyledSecondHeadline>
                    <StyledIntroductionParagraph>{RawData[randomNumber].description}</StyledIntroductionParagraph>
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
        </main>
    )
}

const StyledHeadline = styled.h1`
    font-size: 1.4rem;
    color: var(--darkgrey-color);
`;

const StyledSecondHeadline = styled.h2`
    font-size: 1rem;
    color: var(--darkgrey-color);
    font-weight: 500;
`;

const StyledIntroductionParagraph = styled.p` 
    font-size: var(--font-size-description);
    color: var(--darkgrey-color);
`;

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

const StyledMoreInformationButton = styled.button`
    border-radius: 4px; 
    width: 102px;
    height: 36px;
    background-color: var(--darkorange-color);
    border: none;
    margin: 1rem auto 1rem auto;

    color: var(--white-color);
`;
