import FlashCard from "./FlashCard";
import styled from 'styled-components';


export default function Deck({cards}) {   
    return (
        <DeckContainer>
            {cards.map( (card, index) => 
                <FlashCard 
                    key={index}
                    number={index}
                    content={card}
                    />    
            )}
        </DeckContainer>
    );

}

const DeckContainer = styled.div`
    display: flex;
    margin-top: 153px;
    flex-direction: column;
    gap: 25px;
    
`;