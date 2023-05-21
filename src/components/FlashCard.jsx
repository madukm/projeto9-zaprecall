import styled from 'styled-components';
import playArrow from '../assets/seta_play.png';

export default function FlashCard({number, content}) {
    return (
        <FlashCardContainer>
            <h2>Pergunta {number}</h2>
            <img src={playArrow} />
        </FlashCardContainer>
        
    );
}

const FlashCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 65px;
    padding: 15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    h2 {
        font-weight: 700;
        font-size: 16px;
        color: #333333;
    }
    
`;
