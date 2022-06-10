import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60rem;
    background-color: #000;
    color: #fff;

    .arrow {
        margin: auto 1rem;
        font-size: 3rem;
        cursor: pointer;
    }

    @media(max-width: 1100px) {
        &{
            height: 85rem;
        }
    }

    @media(max-width: 680px) {
        & {
            height: 100vh;
        }
        .arrow {
            margin: auto .3rem;
            font-size: 2.2rem;
        }
    }
`;

export const ContainerProducts = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12rem;
`;