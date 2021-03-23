import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    flex: 1; // ocupa sempre o total da tela (100%)
    display: flex;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent; // degradê de cima para baixo
    background-size: 100% 250px, 100%;
    background-repeat: no-repeat;
    background-position: top;

    padding: 0 20px;
`;