import styled from "styled-components";

export const Container = styled.div `
background-color: #000;
width: 100%;
color: #fff;
padding: 2rem;
border-top: 1px solid #fff;
margin-top: 5rem
`;

export const Input = styled.input `
border: none;
border-radius: .5rem;
background-color: #fff;
padding: .5rem;
width: 30rem;
margin: .5rem 0;
outline: none;

@media(max-width: 800px) {
    margin: .5rem auto;
}
`;

export const Button = styled.button`
width: 30rem;
border: none;
background-color: #000;
outline: none;
padding: 1rem;
color: #fff;
border-bottom: 1px solid #fff;
cursor: pointer;
font-weight: 700;
margin: 1rem 0;

&:hover {
    background-color: rgba(255, 255, 255, .08);
}

@media(max-width: 800px) {
    margin: 1rem auto;
}
`;

export const Form = styled.form `
display: flex;
flex-direction: column;
`;

export const ContainerLogin = styled.div `
display: flex;
justify-content: space-between;
padding-bottom: 3rem;
border-bottom: 1px solid #fff;

@media(max-width: 800px) {
    flex-direction: column;
    text-align: center;
}
`;

export const SocialContainer = styled.div `
margin-top: 2rem;
.media {
    font-size: 3rem;
    cursor: pointer;
    margin-right: 1rem;
}
`;

export const H3 = styled.h3 ``;