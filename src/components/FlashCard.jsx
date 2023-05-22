import styled from 'styled-components';
import playArrow from '../assets/seta_play.png';
import turnArrow from '../assets/seta_virar.png';
import correctIcon from '../assets/icone_certo.png';
import almostIcon from '../assets/icone_quase.png';
import wrongIcon from '../assets/icone_erro.png';
import { useState } from 'react';

export default function FlashCard({number, content, nQuestions, setNQuestions}) {
    let [cardState, setCardState] = useState('back');
    let [cardIcon, setCardIcon] = useState(playArrow);
    let [resultStyle, setResultStyle] = useState({color: '#333333', decoration: 'none'});
    let [iconDataTest, setIconDataTest] = useState('play-btn');

    function checkResult (result) {
        if (result === "wrong") {
            setCardIcon(wrongIcon);
            setResultStyle({color: '#FF3030', decoration: 'line-through'});
            setIconDataTest('no-icon');
        } else if (result === "almost") {
            setCardIcon(almostIcon);
            setResultStyle({color: '#FF922E', decoration: 'line-through'});
            setIconDataTest('partial-icon');
        } else if (result === "correct") {
            setCardIcon(correctIcon);
            setResultStyle({color: '#2FBE34', decoration: 'line-through'});
            setIconDataTest('zap-icon');
        }
        setCardState('back');
        {setNQuestions(nQuestions+1)};
    }

    return (
        <div data-test="flashcard">
            {cardState === 'back' && 
                <TurnedDownCard style={resultStyle}>
                    <h2 data-test="flashcard-text">Pergunta {number}</h2>
                    <img src={cardIcon} onClick={() => setCardState('question')} data-test={iconDataTest}/>
                </TurnedDownCard>     
            }
            {cardState === 'question' && 
                <QuestionCard>
                    <h2 data-test="flashcard-text">{content.question}</h2>
                    <img src={turnArrow} onClick={() => setCardState('answer')} data-test="turn-btn"/>
                </QuestionCard>
            }
            {cardState === 'answer' && 
                <AnswerCard>
                    <h2 data-test="flashcard-text">{content.answer}</h2>
                    <div className='buttons'>
                        <button className='wrong' onClick={() => checkResult('wrong')}>
                            Não lembrei
                        </button>
                        <button className='almost' onClick={() => checkResult('almost')}>
                            Quase não lembrei
                        </button>
                        <button className='correct' onClick={() => checkResult('correct') }>
                            Zap!
                        </button>
                    </div>
                </AnswerCard>
            }
        
        </div>
        
    );
}

const FlashCardContainer = styled.div`
    width: 300px;
    padding: 15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    
`;

const TurnedDownCard = styled(FlashCardContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    h2 {
        font-weight: 700;
        font-size: 16px;
        color: ${props => props.style.color};
        text-decoration: ${props => props.style.decoration}
    }
`;

const QuestionCard = styled(FlashCardContainer)`
    height: 131px;
    background: #FFFFD5;
    position: relative;

    img {
        position: absolute;
        bottom: 6px;
        right: 15px;
    }
`;

const AnswerCard = styled(FlashCardContainer)`
    height: 131px;
    background: #FFFFD5;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .buttons {
        display: flex;
        justify-content: space-between;
        bottom: 10px;
    }

    button {
        color: white;
        width: 85.17px;
        height: 37.17px;
        border-radius: 5px;
        border: none;
    }

    .wrong {
        background: #FF3030;
    }

    .almost {
        background: #FF922E;
    }

    .correct {
        background: #2FBE34;
    }

`;


