/* css: aplicavárias regras ao mesmo tempo p quando o componente
tiver uma certa propriedade */
import styled, { css } from 'styled-components';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
    margin-top: 30px;
    
    ${Spinner} {
        height: 48px;
    }

    ${props => props.loading && css`
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 220px;
        height: 220px;
    }

    div {
        margin-left : 20px;

        span {
            font-size: 11px;
            letter-spacing: 1.11px;
            font-weight: 300;
        }

        h1 {
            margin-top: 10px;
            font-size: 48px;
        }

        p {
            margin-top: 0;
            color: #b3b3b3;
            font-size: 11px;
            letter-spacing: 1.11px;
            text-transform: uppercase;
        }

        button {
            background: #1db854;
            height: 32px;
            border-radius: 16px;
            color: #FFF;
            line-height: 32px;
            padding: 0 35px;
            border: 0;
            margin-top: 10px;
            font-size: 12px;
            letter-spacing: 1.11px;
        }
    }
`;

export const SongList = styled.table`
    width: 100%; // a table tem o comportamento de n ocupar a largura total
    text-align: left; // forçar a table ter o headers dela alinhados a esquerda e nao ao centro como é o padrão
    margin-top: 20px;

    thead th {
        font-size: 11px;
        color: #b3b3b3;
        letter-spacing: 1.11px;
        font-weight: normal;
        text-transform: uppercase;
        padding: 5px 10px;

        &:last-child {
            text-align: right;
        }
    }

    tbody td {
        border-top: 1px solid #282828;
        font-size: 13px;
        padding: 0 10px;
        line-height: 40px; // espaçamento entre as tabelas (tamanho a altura da td)
        
        &:first-child {
            width: 80px;
            text-align: right;
        }

        &:last-child {
            text-align: right;
        }
    }

    tbody tr:hover td {
        background: #282828;
    }

    
`
