import styled from 'styled-components';
import logo from '../assets/logo.png';
import Deck from './Deck';
import Footer from './Footer';
import cards from "../cards";

export default function Game({nQuestions}) {
    const totalQuestions = cards.length;

    return (
        <GameContainer>
            <div className='logo'>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </div>
            <Deck cards={cards}/>
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
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        position: fixed;
        height: 153px;
        top: 0;
        z-index: 1;
        width: 100%;
        background-color: #FB6B6B;
        
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