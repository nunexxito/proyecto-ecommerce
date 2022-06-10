import styled from "styled-components";

export const Container = styled.div`
background-color: #000;
color: #fff;
display: flex;
justify-content: space-between;
margin: 10rem;
padding: 3rem;
border: 1px solid #fff;

@media(max-width: 1050px) {
    flex-direction: column;
}

@media(max-width: 680px) {
    margin: 10rem 1rem;
}
`;

//left
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50rem;

    @media(max-width: 1050px) {
        margin: auto;
        width: 100%;
    }
`;

export const Info = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
margin-bottom: 4rem
`;

export const StateProduct = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

.item {
    font-size: 3.2rem;
    text-align: center;
    width: 100%;
}

.done{
    
}

.inProgress{
    animation: inProgress 1s ease infinite alternate;
}

@keyframes inProgress {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.undone{
    opacity: 0.3;
}

.undone .check, .inProgress .check {
    display: none;
}

@media(max-width: 1050px) {
    flex-direction: column;
}
`;

export const Details = styled.div`
h3 {
    text-align: center;
}
`;

export const State = styled.div`
text-align: center;

@media(max-width: 1050px) {
    margin-bottom: 4rem;
}
`;

export const ContainerCheck = styled.div`
display: flex;
justify-content: center;

.check {
    font-size: 2rem;
    margin-top: 2rem;
    background-color: #090;
    border-radius: 50%;
}
`;

//right
export const ContainerPrice = styled.div`
width: 25rem;
margin: auto 0;

@media(max-width: 1050px) {
    margin: 3rem auto;
    }
`;

export const ContainerItem = styled.div`
display: flex;
justify-content: space-between;
`;

export const ContainerShipping = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid #fff;
padding-bottom: 1rem;
`;

export const ContainerTotal = styled.div`
display: flex;
justify-content: space-between;
margin-top: 2rem;
`;

export const ButtonCart = styled.button`
border: none;
background-color: #000;
color: #fff;
border-bottom: 1px solid #fff;
width: 100%;
padding: 1rem;
cursor: not-allowed;
margin: 1rem 0;

&:hover {
    background-color: #fff;
    color: #000;
}
`;