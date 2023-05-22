import styled from 'styled-components';
import logo from '../assets/logo.png';
import Deck from './Deck';
import Footer from './Footer';
import cards from "../cards";
import { useState } from 'react';

export default function Game() {
    const totalQuestions = cards.length;
    let [nQuestions, setNQuestions] = useState(0);

    return (
        <GameContainer>
            <div className='logo'>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </div>
            <Deck cards={cards} nQuestions={nQuestions} setNQuestions={setNQuestions}/>
            <Footer nQuestions={nQuestions} totalQuestions={totalQuestions}/>
        </GameContainer>
    );
}

const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .logo {
        width: 100%;
        height: 153px;
        position: fixed;
        top: 0;
        z-index: 1;
        background-color: #FB6B6B;
        
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
        img {
            width: 52px;
            height: 60px;
        }

        h1 {
            color: white;
            font-family: 'Righteous', cursive;
            font-weight: 400;
            font-size: 36px;
        }
    }

`;