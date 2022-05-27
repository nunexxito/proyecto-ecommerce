import ProductCard from "./ProductCard";
import styled from "styled-components";

export default function Menu() {
    return(
        <Container>
            <h3>Catalogo</h3>
            <Wrapper>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    padding: 2rem 4rem;
    text-align: center;
    background-color: #fff;

    @media(max-width: 1100px) {
        & {
            padding: 2rem;
        }
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 30rem);
    gap: 3rem;
    margin: 2rem auto;
    place-content: center;

    @media(max-width: 1015px) {
        & {
            grid-template-columns: repeat(auto-fill, 22.5rem);
            gap: 2rem;
        }
    }
    @media(max-width: 750px) {
        & {
            grid-template-columns: repeat(auto-fill, 15rem);
            // gap: 1rem;
        }
    }
`;