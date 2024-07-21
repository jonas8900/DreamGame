import Image from "next/image";
import { RawData } from "@/rawdata";
import styled from "styled-components";


export default function GameOfTheDayContent() {
    
    
    function handleRandomNumber() {
        // return Math.floor(Math.random() * RawData.length);
        return 0;
    }

    const randomNumber = handleRandomNumber();
    console.log(randomNumber);
    console.log(RawData[randomNumber]);
    
    return(
        <main>
            <StyledContentDiv>
                <StyledImage src={RawData[randomNumber].image} alt="Game of the Day" width={500} height={300}/>
                <StyledTextContainer>
                    <h1>{RawData[randomNumber].name}</h1>
                    <p>{RawData[randomNumber].description}</p>
                    <p>Genre: {RawData[randomNumber].genre}</p>
                    <p>Mode: {RawData[randomNumber].mode}</p>
                    <p>Rating: {RawData[randomNumber].rating}</p>
                    <p>Reviews: {RawData[randomNumber].reviews}</p>
                    <p>Release Date: {RawData[randomNumber].releaseDate}</p>
                </StyledTextContainer>
            </StyledContentDiv>
        </main>
    )
}

const StyledContentDiv = styled.div`
    border-radius: 4px; 
    background-color: var(--lightgreen-color);
    margin: auto 1rem auto 1rem;
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