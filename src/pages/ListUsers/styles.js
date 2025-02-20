import styled from "styled-components"

export const Container = styled.div`
    background-color: #f5f5f5;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const Title = styled.h2`
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    color: #ff9100;
    margin-top: 20px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 40px 0;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    border-radius: 10px;
    border: 1px solid #c9c9c9;
    background-color: #ffffff;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;

    h3 {
        color: #7e7e7e;
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p {
        color: #7e7e7e;
        font-size: 16px;
        font-weight: 200;
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding: 10px;

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.8;
    }
`

export const AvatarUser = styled.img`
    height: 80px;
`