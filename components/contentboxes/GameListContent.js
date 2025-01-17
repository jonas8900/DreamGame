import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { Close, FilterAlt } from '@mui/icons-material';
import axios from 'axios';
import { useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import _ from 'lodash';
import { RawData } from '@/rawdata';

export default function GameListContent({}) {
    // const [page, setPage] = useState(1);
    // const [hasMore, setHasMore] = useState(true);
    // const { ref, inView } = useInView();
    const [filter, setFilter] = useState(false);
    const router = useRouter();
    const games = RawData;
//     const fetchGames = useCallback(_.debounce(async () => {
//       if (!hasMore) return;
  
//       try {
//         const response = await axios.get(`/api/gamelist?page=${page}&pageSize=10`);
//         const newGames = response.data;
  
//         if (newGames.length === 0) {
//           setHasMore(false);
//         } else {
//             setGames(prev => [...prev, ...newGames]);
//           setPage(prev => prev + 1);
//         }
//       } catch (error) {
//         console.error('Fehler beim Abrufen der Spiele:', error);
//       }
//     }, 1000), [page, hasMore]);
  
//     useEffect(() => {
//       if (inView && hasMore) {
//         fetchGames();
//       }
//     }, [inView, fetchGames, hasMore]);
//     const fetchGames = useCallback(_.debounce(async () => {
//   if (!hasMore) return;

//   try {
//     const response = await axios.get(`/api/games?page=${page}&pageSize=${pageSize}`);
//     const newGames = response.data;

//     // Vermeide doppelte Einträge basierend auf appid
//     setGames(prev => {
//       const existingIds = new Set(prev.map(game => game.appid));
//       const filteredNewGames = newGames.filter(game => !existingIds.has(game.appid));
//       return [...prev, ...filteredNewGames];
//     });

//     if (newGames.length === 0) {
//       setHasMore(false);
//     } else {
//       setPage(prev => prev + 1);
//     }
//   } catch (error) {
//     console.error('Fehler beim Abrufen der Spiele:', error);
//   }
// }, 1000), [page, hasMore, pageSize]);


    function handleFilter() {
        setFilter(!filter);
    }

    function handleRouteToId(gameId) {
        router.push(`/${gameId}`);
    }

console.log(games[0]);
    return (
        <StyledMain>
            {games.map((game) => (
                <StyledGameDiv key={game.id} filterActive={filter} onClick={() => handleRouteToId(game.id)}>
                     <StyledImage src={game.image} alt={game.name} width={500} height={500}/> 
                    <StyledTextDiv>
                        {(game.name).length > 17 ? (
                            <StyledSmallHeadline>{game.name}</StyledSmallHeadline>
                        ) : (
                            <StyledHeadline>{game.name}</StyledHeadline>
                        )}
                        <StyledParagraph>{game.gametype}</StyledParagraph>
                    </StyledTextDiv>
                </StyledGameDiv>

            ))}
            <StyledFilterIcon onClick={handleFilter}/>
            {filter && (
                <StyledFilterDiv>
                    <StyledSecondHeadline>Filter</StyledSecondHeadline>
                    <StyledCloseIcon onClick={handleFilter}/>
                    <StyledForm>
                        <StyledInputWrap>
                            <StyledLabel id="gametype">Preis</StyledLabel>
                            <StyledSelect htmlFor="gametype">
                            <option value="aufsteigend">Preis Aufsteigend</option>
                            <option value="absteigend">Preis Absteigend</option>
                            </StyledSelect>
                        </StyledInputWrap>
                        <StyledLine></StyledLine>
                        <StyledInputWrap>
                            <StyledLabel id="gametype">Kategorie</StyledLabel>
                            <StyledSelect htmlFor="gametype">
                            <option value="alle">Alle</option>
                            {games.map((game) => (
                                <option key={game.id} value={game.gametype}>{game.gametype}</option>    
                            ))}
                            </StyledSelect>
                        </StyledInputWrap>
                        <StyledLine></StyledLine>
                        <StyledInputWrap>
                            <StyledLabel id="gametype">Modus</StyledLabel>
                            <StyledSelect htmlFor="gametype">
                            <option value="alle">Alle</option>
                            {games.map((game) => (    
                                <option key={game.id} value={game.mode}>{game.mode}</option>    
                            ))}
                            </StyledSelect>
                        </StyledInputWrap>
                        <StyledLine></StyledLine>
                        <StyledInputWrap>
                            <StyledLabel id="gametype">Release</StyledLabel>
                            <StyledSelect htmlFor="gametype">
                            <option value="alle">Alle</option>
                            <option value="diesen Monat">diesen Monat</option>
                            <option value="dieses Jahr">dieses Jahr</option>
                            <option value="letztes Jahr">letztes Jahr</option>
                            </StyledSelect>
                        </StyledInputWrap>
                        <StyledLine></StyledLine>
                        <StyledButton type="submit">Filtern</StyledButton>
                    </StyledForm>
                </StyledFilterDiv>
            )}
        </StyledMain> 
    );
}

    const StyledMain = styled.main`
        margin-bottom: 5rem;
        z-index: 0;
        
    `;

    const StyledGameDiv = styled.div`
        background-color: var(--lightgreen-color);
        height: 4.6rem;
        margin: 0.5rem; 
        border-radius: 4px;
        display: flex;
        filter: ${({filterActive}) => filterActive ? "blur(3px)" : "none"};
        transition: filter 0.3s;
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

    const StyledFilterIcon = styled(FilterAlt)`
        position: fixed;
        bottom: 6rem;
        right: 2rem;
        color: white;
        background-color: var(--darkorange-color);
        font-size: 3rem;
        border-radius: 50%;
        padding: 0.5rem;
        cursor: pointer;
    `;

    const StyledFilterDiv = styled.div`

        position: fixed;
        bottom: 4rem;
        right: 0;
        width: 100%;
        height: 50%;
        background-color: white;
        z-index: 0;
        overflow: scroll;
        border-radius: 18px 18px 0 0;
        transition: height 0.3s;
    `;

    const StyledSecondHeadline = styled.h2`
        font-size: 1.5rem;
        color: var(--darkgrey-color);
        font-family: 'Bebas Neue', cursive;
        font-weight: 500;
        margin: 1.5rem;
    `;

    const StyledCloseIcon = styled(Close)`
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: var(--darkgrey-color);
        font-size: 2rem;
        cursor: pointer;
    `;

    const StyledForm = styled.form`
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        
    `;

    const StyledInputWrap = styled.div`
        display: flex;
    `;

    const StyledLabel = styled.label`
        font-size: 1rem;
        color: var(--darkgrey-color);
        margin-left: 2rem;
    `;

    const StyledSelect = styled.select`
        border: none;
        background-color: white;
        text-align: right;
        font-size: 0.9rem;
        color: var(--darkgrey-color);
        margin-left: auto;
        margin-right: 2rem;

    `;

    const StyledLine = styled.hr`
        width: 85%;
        margin: 1.5rem auto;
        background-color: var(--darkgrey-color);
        max-height: 1px;
    `;

    const StyledButton = styled.button`
        background-color: var(--darkorange-color);
        color: white;
        font-size: 1rem;
        padding: 0.75rem;
        border: none;
        border-radius: 4px;
        justify-self: center;
        align-self: center;
        cursor: pointer;
        margin-bottom: 2rem;
    `;