import { AccountCircle } from "@mui/icons-material";
import { Search } from "@mui/icons-material"
import styled from "styled-components";


export default function PageHead({pageheadline}) {
    return (
        <StyledDiv>
        <StyledHeadline>{pageheadline}</StyledHeadline>	
        <StyledSearch><StyledButton></StyledButton></StyledSearch>
        <StyledAccountCircle><StyledButton></StyledButton></StyledAccountCircle>
        </StyledDiv>
    )
}



const StyledDiv = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 0.6fr;
align-items: center;
font-size: 18px;
padding-left: 1rem;
padding-right: 1rem;
background-color: var(--white-background);
`;


const StyledHeadline = styled.h1`
font-family: 'Bebas Neue', sans-serif;
color: var(--darkgrey-color);
font-weight: 400;
`;

const StyledButton = styled.button`
background-color: transparent;
border: none;
`;

const StyledSearch = styled(Search)`
color: var(--darkgrey-color);
font-size: 2.0625rem;
grid-area: 1 / 2 / 2 / 3;
justify-self: end;

&:active {
    color: var(--darkorange-color);
}

`;

const StyledAccountCircle = styled(AccountCircle)`
color: var(--darkgrey-color);
font-size: 2.0625rem;
grid-area: 1 / 3 / 2 / 4;
justify-self: end;
&:active {
    color: var(--darkorange-color);
}
`;