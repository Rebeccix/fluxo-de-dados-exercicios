import styled from "styled-components";


export const ContainerPostagem = styled.div`
    width: 100%;
    background-color: #f8f3ee;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    span {
        margin: 10px 10px;
        background-color: red;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    button {
        background-color: aliceblue;
        color: black;
        font-size: 1.5rem;
        width: 100px;
        height: 100px;
    }
`

export const Image = styled.img`
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 2rem 0;
    width: 240px;
    height: auto;
`

export const Description = styled.p`
    max-width: 500px;
    padding-top: 1rem;
`

