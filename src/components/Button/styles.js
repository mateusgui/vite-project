import styled from 'styled-components'

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    font-size: 16px;
    color: #ffffff;
    background-color: ${ props => props.theme === 'primary' ? '#ff9100' :'#00ff22' };
    padding: ${ props => props.theme === 'primary' ? '16px 32px' : '10px 20px' };
    width: fit-content;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.8;
    }
`