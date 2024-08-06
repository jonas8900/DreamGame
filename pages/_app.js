import Head from "next/head";
import GlobalStyle from "../styles";
import useLocalStorage from "use-local-storage";
import { useState } from "react";
import { RawData } from "@/rawdata";


export default function App({ Component, pageProps }) {
    const [favoriteGameId, setFavoriteGameId] = useLocalStorage("favoriteGameId", []);
    const [currentGameId, setCurrentGameId] = useState(null);
    const [gameOfTheDay, setGameOfTheDay] = useState(null);

    function handleGameOfTheDay() {
        const randomGameId = Math.floor(Math.random() * RawData.length);
        setGameOfTheDay(randomGameId);
    }


    



    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <title>DreamGame</title>
                <meta name="description" content="Das was du für dein Gamingstand brauchst!" />
                <link rel="shortcut icon" href="/icons/icon-192x192.png" />
                <link rel="mask-icon" href="/icons/icon-192x192.png" color="#FFFFFF" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
                <link
                    rel="apple-touch-icon"
                    sizes="512x512"
                    href="/icons/icon-512x512.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://yourdomain.com" />
                <meta name="twitter:title" content="DreamGame" />
                <meta name="twitter:description" content="Das was du für dein Gamingstand brauchst!" />
                <meta name="twitter:image" content="/icons/icon-512x512.png" />
                <meta name="twitter:creator" content="@DavidWShadow" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="DreamGame" />
                <meta property="og:description" content="Das was du für dein Gamingstand brauchst!" />
                <meta property="og:site_name" content="DreamGame" />
                <meta property="og:url" content="https://yourdomain.com" />
                <meta property="og:image" content="/icons/icon-512x512.png" />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} setFavoriteGameId={setFavoriteGameId} favoriteGameId={favoriteGameId} currentGameId={currentGameId} setCurrentGameId={setCurrentGameId}/>
        </>
    );
}