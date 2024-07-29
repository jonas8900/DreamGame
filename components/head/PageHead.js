import { AccountCircle } from "@mui/icons-material";
import { Search } from "@mui/icons-material"
import { Close } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";


export default function PageHead({pageheadline}) {
    const [searchOpen, setSearchOpen] = useState(false);
    const router = useRouter();
    const pathname = router.pathname;
    const routeToPath = "/login";


    function handleOpenSearch() {
        setSearchOpen(!searchOpen);
    }

    function handleInputChange(event) {
        const formElement = event.target.form;
        const formData = new FormData(formElement);
        const searchedData = Object.fromEntries(formData);
    }
    

    return (
        <StyledDiv>
        {searchOpen ? (
            <>
            <form>
                <label id="search" ></label>
                <StyledInput type="text" placeholder="Suche..." name="search" onChange={handleInputChange}/>
            </form>
            <StyledClose onClick={handleOpenSearch}></StyledClose>
            </>
        ) : (
            <>
            <StyledHeadline>{pageheadline}</StyledHeadline>	
            <StyledSearch onClick={handleOpenSearch}></StyledSearch>
            </>
        )}
        <StyledLink href={routeToPath}><StyledAccountCircle active={pathname === routeToPath ? 1 : 0}></StyledAccountCircle></StyledLink>
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
min-height: 4.5rem;
`;


const StyledHeadline = styled.h1`
font-family: 'Bebas Neue', sans-serif;
color: var(--darkgrey-color);
font-size: var(--font-size-header);
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

const StyledClose = styled(Close)`
color: var(--darkgrey-color);
font-size: 2.0625rem;
grid-area: 1 / 2 / 2 / 3;
justify-self: end;
&:active {
    color: var(--darkorange-color);
}
`;


const StyledAccountCircle = styled(AccountCircle)`
color: ${props => props.active ? 'var(--darkorange-color)' : 'var(--darkgrey-color)'};
font-size: 2.0625rem;
&:active {
    color: var(--darkorange-color);
}
`;

const StyledLink = styled(Link)`
grid-area: 1 / 3 / 2 / 4;
justify-self: end;
`;

const StyledInput = styled.input`
    border: none;
    border-radius: 1rem; 
    height: 2rem;
    width: 100%; 
    padding: 1rem;
`;