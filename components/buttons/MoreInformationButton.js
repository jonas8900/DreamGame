import styled from "styled-components";

export default function MoreInformationButton({onClick}) {
    return(
        <StyledMoreInformationButton onClick={onClick}>Mehr Infos</StyledMoreInformationButton>
    )
}


const StyledMoreInformationButton = styled.button`
    border-radius: 4px; 
    width: 102px;
    height: 36px;
    background-color: var(--darkorange-color);
    border: none;
    margin: 1rem auto 1rem auto;
    color: var(--white-color);
    font-weight: 500;
    cursor: pointer;
`;
