import styled from 'styled-components';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.aside`
    height: 100%;
    width: 200px;
    background: #121212;
    color: #b3b3b3; //this

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div { // > vai pegar a primeira div
        padding: 25px;
    }
`;

export const Nav = styled.ul`
    list-style: none;
    margin-top: 25px;

    &:first-child {
        margin: 0; //primeira ul
    }

    li {
        display: flex;
        align-items: center;

        a {
            color: inherit; // pega a mesma cor do container
            text-decoration: none;
            font-size: 13px;
            line-height: 32px;
            font-weight: ${props => (props.main ? 'bold' : 'normal')};

            &:hover {
                color: #FFF;
            }
        }

        span {
            font-size: 11px;
            text-transform: uppercase;
            line-height: 22px;
            letter-spacing: 1.11px;
            font-weight: 300;
        }

        ${Spinner} {
            height: 15px;
            margin-left: 5px;
        }
    }
`;

export const NewPlaylist = styled.button`
    background: transparent;
    border: 0;
    border-top: 1px solid #282828;
    font-size: 13px;
    color: #b3b3b3;
    display: flex;
    align-items: center;
    padding: 15px 25px;

    &:hover {
        color: #FFF;
    }

    img {
        margin-right: 10px;
    }
`;