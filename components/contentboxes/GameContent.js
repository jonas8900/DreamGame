import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RawData } from "@/rawdata";
import styled from "styled-components";
import { Computer, Group, Public, ThumbsUpDown, FiberNew, Euro, Favorite, ArrowBack } from "@mui/icons-material";
import MoreInformationButton from "../buttons/MoreInformationButton";
import { useRouter } from "next/router";

export default function GameContent({
  setFavoriteGameId,
  favoriteGameId,
  currentGameId,
  setCurrentGameId,
}) {
    

    const router = useRouter();
    const { id } = router.query;
    const gameOfTheDay = 1;
    const [moreInformationClicked, setMoreInformationClicked] = useState(false);

  useEffect(() => {
    if (id === undefined) {
      setCurrentGameId(gameOfTheDay);
    } else {
      setCurrentGameId(parseInt(id));
    }
  }, [id, setCurrentGameId]);

  function handleAddToFavorites(gameId) {
    if (favoriteGameId.includes(gameId)) {
      return;
    } else {
      setFavoriteGameId([...favoriteGameId, gameId]);
    }
  }

  function handleRemoveFromFavorites(gameId) {
    const newFavoriteGameId = favoriteGameId.filter((id) => id !== gameId);
    setFavoriteGameId(newFavoriteGameId);
  }

  if (currentGameId === null || currentGameId === undefined) {
    return <div>Loading...</div>;
  }

  function handleMoreInformation() {
    setMoreInformationClicked(!moreInformationClicked);
    }

    const game = RawData[currentGameId - 1];



    function getYouTubeVideoId(url) {
        const regExp = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^"&?\/\s]{11})/;
        const match = url.match(regExp);
        return match ? match[1] : null;
      }

  return (
    <main>
      {moreInformationClicked ? (
              <StyledContentDiv>
                <StyledHeadlineDivInMoreInformation>
                    <StyledBackIcon onClick={handleMoreInformation} />
                    <StyledHeadlineWrapper>
                        <StyledHeadline>{game.name}</StyledHeadline>
                        <StyledSecondHeadline>{game.gametype}</StyledSecondHeadline>
                    </StyledHeadlineWrapper>
                </StyledHeadlineDivInMoreInformation>

              <StyledTextContainer>                
                <StyledBorder />
                <StyledInformationWrapperForDetails>
                    <StyledInformationLabel>Release</StyledInformationLabel>
                    <StyledInfomationParagraph>{game.releaseDate}</StyledInfomationParagraph>
                </StyledInformationWrapperForDetails>
                <StyledInformationWrapperForDetails>
                    <StyledInformationLabel>Website</StyledInformationLabel>
                    <StyledInfomationParagraph><StyledLink target="blank" href={game.website}>hier</StyledLink> gehts zur Website</StyledInfomationParagraph>
                </StyledInformationWrapperForDetails>
                <StyledInformationWrapperForDetails>
                    <StyledInformationLabel>Spieltyp</StyledInformationLabel>
                    <StyledInfomationParagraph>
                      {game.gametype}
                     </StyledInfomationParagraph>
                </StyledInformationWrapperForDetails>
                <StyledInformationWrapperForDetails>
                    <StyledInformationLabel>Entwickler</StyledInformationLabel>
                    <StyledInfomationParagraph>{game.developer}</StyledInfomationParagraph>
                </StyledInformationWrapperForDetails>
                <StyledInformationWrapperForDetails>
                    <StyledInformationLabel>Plattformen</StyledInformationLabel>
                     <StyledInfomationParagraph>{game.gameplattform}</StyledInfomationParagraph>
                </StyledInformationWrapperForDetails>
                <StyledInformationWrapperForDetails>
                    <StyledInformationLabel>Discord</StyledInformationLabel>
                     <StyledInfomationParagraph><StyledLink href={game.gameplattform} target="blank">hier</StyledLink> dem Server Joinen</StyledInfomationParagraph>
                </StyledInformationWrapperForDetails>
                <StyledInformationWrapperForDetails>
                    <StyledInformationLabel>Social Media</StyledInformationLabel>
                    {Object.entries(game.socialMedia).map(([plattform, link]) => {
                        switch (plattform) {
                            case "twitter":
                                return (<StyledLink key={plattform} href={link} target="blank"><StyledIcon src={"/icons/X.svg"} width={38} height={38} alt="x logo"></StyledIcon></StyledLink>);
                            case "facebook":
                                return (<StyledLink key={plattform} href={link} target="blank"><StyledIcon src={"/icons/facebook.svg"} width={38} height={38} alt="Facebook logo"></StyledIcon></StyledLink>);
                            case "instagram":
                                return (<StyledLink key={plattform} href={link} target="blank"><StyledIcon src={"/icons/instagram.png"} width={38} height={38} alt="Instagram logo"></StyledIcon></StyledLink>);
                            default:
                                return null;
                        }
                    })}
                
                </StyledInformationWrapperForDetails>
              </StyledTextContainer>
              <StyledYoutubeFrame
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(game.trailer)}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
              <MoreInformationButton onClick={handleMoreInformation}>zurück</MoreInformationButton>
            </StyledContentDiv>
      ) : (
        <StyledContentDiv>
        <StyledImage
          src={game.image}
          alt="Game of the Day"
          width={500}
          height={300}
        />
        <StyledTextContainer>
          <StyledHeadlineDiv>
            <StyledHeadline>{game.name}</StyledHeadline>
            {favoriteGameId.includes(game.id) ? (
              <StyledFavoriteIconClicked
                onClick={() => handleRemoveFromFavorites(game.id)}
              />
            ) : (
              <StyledFavoriteIconNotClicked
                onClick={() => handleAddToFavorites(game.id)}
              />
            )}
          </StyledHeadlineDiv>
          <StyledSecondHeadline>{game.gametype}</StyledSecondHeadline>
          <StyledIntroductionParagraph>{game.description}</StyledIntroductionParagraph>
          <StyledPlattformsWrapper>
            {game.plattform.map((plattformtype, index) => {
              switch (plattformtype) {
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
                      <Image
                        src="/icons/icons8-playstation.svg"
                        alt="Playstation Logo"
                        width={33}
                        height={33}
                      />
                      <StyledPlattformParagraph>PlayStation 5</StyledPlattformParagraph>
                    </StyledPlattformWrapper>
                  );
                case "Xbox One":
                  return (
                    <StyledPlattformWrapper key={index}>
                      <Image
                        src="/icons/icons8-xbox.svg"
                        alt="Xbox Logo"
                        width={33}
                        height={33}
                      />
                      <StyledPlattformParagraph>Xbox One</StyledPlattformParagraph>
                    </StyledPlattformWrapper>
                  );
                case "Nintendo Switch":
                  return (
                    <StyledPlattformWrapper key={index}>
                      <Image
                        src="/icons/icons8-nintendo-switch-logo.svg"
                        alt="Nintendo Switch Logo"
                        width={36}
                        height={36}
                      />
                      <StyledPlattformParagraph>Nintendo Switch</StyledPlattformParagraph>
                    </StyledPlattformWrapper>
                  );
                default:
                  return null;
              }
            })}
          </StyledPlattformsWrapper>
          <StyledInformationWrapper>
            <StyledGroupIcon />
            <StyledInfomationParagraph>{game.mode}</StyledInfomationParagraph>
          </StyledInformationWrapper>
          <StyledInformationWrapper>
            <StyledPublicIcon />
            <StyledInfomationParagraph>{game.onlinePlayerCount} Spieler online</StyledInfomationParagraph>
          </StyledInformationWrapper>
          <StyledInformationWrapper>
            <StyledThumbsUpDownIcon />
            <StyledInfomationParagraph>
              {game.rating} <br />
              von {game.ratingCount} bewertet
            </StyledInfomationParagraph>
          </StyledInformationWrapper>
          <StyledInformationWrapper>
            <StyledFiberNewIcon />
            <StyledInfomationParagraph>Release: {game.releaseDate}</StyledInfomationParagraph>
          </StyledInformationWrapper>
          <StyledInformationWrapper>
            <StyledEuroIcon />
            <StyledInfomationParagraph>Preis {game.price} €</StyledInfomationParagraph>
          </StyledInformationWrapper>
        </StyledTextContainer>
        <MoreInformationButton onClick={handleMoreInformation}>Mehr infos</MoreInformationButton>
      </StyledContentDiv>
      )}
    </main>
  );
}

const StyledHeadlineDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
  position: relative;
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
  flex-direction: column;
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

const StyledInformationLabel = styled.p`
    font-size: 14px;
    color: var(--darkgrey-color);
    font-weight: 500;
    min-width: 6rem;

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

const StyledBackIcon = styled(ArrowBack)`
    font-size: 2.5rem;
    color: var(--darkorange-color);

`;

const StyledHeadlineDivInMoreInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1rem 0 1rem 1rem;
    `;

const StyledHeadlineWrapper = styled.div`
    display: flex;
    flex-direction: column;

    h1, h2 {
        padding: 0;
        margin: 0;
    }


`;

const StyledLink = styled.a`
    color: var(--darkorange-color);
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    `;

const StyledIcon = styled(Image)`

`;

const StyledYoutubeFrame = styled.iframe`
    width: 80%;
    height: 80%;
    margin: 2rem auto 2rem auto;
`;

const StyledInformationWrapperForDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const StyledBorder = styled.div`
    position: absolute; 
    height: 100%; 
    width: 1px; 
    top: 0;
    left: 8rem;
    background-color: var(--darkgrey-color);

`;