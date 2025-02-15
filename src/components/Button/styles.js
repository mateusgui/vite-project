import styled from 'styled-components'

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    font-size: 16px;
    color: #ffffff;
    background-color: #ff9100;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.8;
    }
`