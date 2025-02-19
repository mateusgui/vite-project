import styled from 'styled-components'

export const Container = styled.div`
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`

export const Title = styled.h2`
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    color: #ff9100;
`

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #c9c9c9;
    background-color: #ffffff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const InputLabel = styled.label`
    color: #7e7e7e;
    font-size: 12px;
    font-weight: 500;

    span {
        color: #ff9100;
        font-weight: bold;
    }
`

