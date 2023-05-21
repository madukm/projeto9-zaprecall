import { useState } from 'react'
import Game from './Game';
import { GlobalStyle } from './style';
import Footer from './Footer';

export default function App() {
    let [nQuestions, setNQuestions] = useState(0);

    return (
        <>
            <GlobalStyle />
            <Game nQuestions={nQuestions}/>
        </>
        
    );
}   
