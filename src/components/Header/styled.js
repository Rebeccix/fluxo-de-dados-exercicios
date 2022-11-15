import styled from "styled-components"

export const TitleHeader = styled.header`
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;

    span {
        display: inline-block;
        width: 130px;
        position: absolute;
        left: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const Image = styled.img`
    border-radius: 0.5rem;
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin: 2rem 0;
`

// - Você pode usar o link da sua foto de perfil do Linkedin
// - A imagem será redonda e terá 50px de altura e 50px de largura
// - O nome do usuário deverá estar alinhado à imagem