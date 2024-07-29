import { RawData } from "@/rawdata";
import Image from "next/image";
import styled from "styled-components"

export default function GameListContent() {
    return (
        <StyledMain>
            {RawData.map((game) => (
                <StyledGameDiv key={game.id}>
                    <StyledImage src={game.image} alt={game.name} width={500} height={500}/>
                    <StyledTextDiv>
                        {(game.name).length > 18 ? (
                            <StyledSmallHeadline>{game.name}</StyledSmallHeadline>
                        ) : (
                            <StyledHeadline>{game.name}</StyledHeadline>
                        )}
                        <StyledParagraph>{game.gametype}</StyledParagraph>
                    </StyledTextDiv>
                </StyledGameDiv>
            ))}
        </StyledMain>
    )
}

    const StyledMain = styled.main`
        margin-bottom: 5rem;
    `;

    const StyledGameDiv = styled.div`
        background-color: var(--lightgreen-color);
        height: 4.6rem;
        margin: 0.5rem; 
        border-radius: 4px;
        display: flex;
        `;

    const StyledImage = styled(Image)`
        border-radius: 4px;
        height: 100%;
        width: 40%;
        object-fit: cover;
        `;

    const StyledHeadline = styled.h1`
        color: var(--darkgrey-color);
        font-size: 1.2rem;
        margin: 1rem 1rem 0rem 1rem;
    `;

    const StyledSmallHeadline = styled.h1`
         color: var(--darkgrey-color);
        font-size: 0.9rem;
        margin: 1rem 1rem 0rem 1rem;
    `;


    const StyledTextDiv = styled.div`
        display: flex;
        flex-direction: column;
        gap: 0;

    `;

    const StyledParagraph = styled.p`
        color: var(--darkorange-color);
        font-size: 0.8rem;
        margin: 0 auto 0 1rem;
        font-weight: bold;
    `;