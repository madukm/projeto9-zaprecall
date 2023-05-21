import styled from 'styled-components';

export default function Footer ({nQuestions, totalQuestions}) {
    return (
        <FooterContainer>
            <h3>{nQuestions}/{totalQuestions} CONCLUÍDOS</h3>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    x-index: 1;
    background-color: white;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    h3 {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`;