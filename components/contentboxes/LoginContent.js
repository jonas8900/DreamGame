import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { Visibility } from "@mui/icons-material";
import Image from "next/image";

export default function LoginContent() {
    const [typeSwitch, setTypeSwitch] = useState('password');

    function handlePasswortTypeHidden() {
        setTypeSwitch('text');
    }

    function handlePasswortTypeVisibil() {
        setTypeSwitch('password');
    }

    return (
        <>
            <StyledHeadline>Jetzt bei <StyledSpan>DreamGame</StyledSpan> anmelden</StyledHeadline>
                <StyledForm>
                    <StyledLabel htmlFor="emailadress">Email Adresse</StyledLabel>
                    <StyledInput type="text" id="username" name="emailadress" placeholder="Email Adresse" required/>
                    <StyledForgotPassword>
                        <StyledLabel htmlFor="password">Passwort</StyledLabel><StyledForgotPasswordLink href="">Passwort vergessen?</StyledForgotPasswordLink>
                    </StyledForgotPassword>
                    <PasswordWrapper>
                        <StyledInput type={typeSwitch} id="password" name="password" placeholder="Passwort" required/>
                        <VisibilityIcon onTouchEnd={handlePasswortTypeVisibil} onTouchStart={handlePasswortTypeHidden}>
                            <Visibility />
                        </VisibilityIcon>
                    </PasswordWrapper>
                    <StyledLoginButton type="submit">Login</StyledLoginButton>
                </StyledForm>
                <StyledLine><StyledDiv></StyledDiv><StyledParagraphLine>oder</StyledParagraphLine><StyledDiv></StyledDiv></StyledLine>
                <StyledGoogleWrapper>
                    <StyledGoogleButton><Image src="/icons/icons8-google.svg" alt="google-icon" width={22} height={22}/>Login mit Google</StyledGoogleButton>
                </StyledGoogleWrapper>
                <StyledRegisterLink href="">Noch keinen Account? Jetzt Registrieren</StyledRegisterLink>
        </>
    );
}

const StyledHeadline = styled.h1`
    font-size: 1.25rem;
    color: var(--darkgrey-color);
    margin: 4rem auto 5rem auto;
    text-align: center;
`;

const StyledSpan = styled.span`
    color: var(--darkorange-color);
`;

const StyledForm = styled.form`
    display: grid; 
    padding: 1rem;
`;

const StyledForgotPasswordLink = styled(Link)`
    color: var(--darkorange-color);
    text-decoration: none;
    font-size: 0.8rem;
`;

const StyledRegisterLink = styled(Link)`
    color: var(--darkorange-color);
    text-decoration: none;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    margin-top: 1rem;

`;


const StyledInput = styled.input`
    width: 100%;
    padding-right: 2.5rem; 
    box-sizing: border-box; 
    height: 44px;
    border-radius: 1rem;
    border: none;
    padding: 1rem;
    margin-bottom: 1rem;
`;

const PasswordWrapper = styled.div`
    position: relative;
    margin-bottom: 0.5rem;
`;

const StyledForgotPassword = styled.div`
    position: relative;

    display: flex;
    justify-content: space-between;
`;

const VisibilityIcon = styled.div`
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-72%);
    cursor: pointer;
    color: #CECECE;
`;

const StyledLabel = styled.label`
    font-size: 0.8rem;
    color: var(--darkgrey-color);
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    font-weight: 100;
`;

const StyledLoginButton = styled.button`
    background-color: var(--darkorange-color);
    color: var(--white-background);
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    margin-top: 0.5rem;
    width: 100%;
    cursor: pointer;
    height: 44px;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 0.95rem;
`;

const StyledGoogleWrapper = styled.div`
    padding: 1rem;
`;

const StyledGoogleButton = styled.button`
    background-color: white;
    color: var(--darkgrey-color);
    border: none;
    border-radius: 1rem;
    width: 100%;
    cursor: pointer;
    height: 44px;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 0.8rem;
    display: flex;
    gap: 0.3rem;
`;

const StyledLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

const StyledDiv = styled.div`
    background-color: var(--darkgrey-color);
    height: 1px;
    width: 40%;
`;

const StyledParagraphLine = styled.p`
    color: var(--darkgrey-color);
    font-size: 0.8rem;
`;