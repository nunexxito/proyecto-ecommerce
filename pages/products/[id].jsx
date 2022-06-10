import Image from 'next/image'
import styled from 'styled-components'

export default function Products() {

    const product = {
        id: 1,
        img: '/img/cad.png',
        name: 'Nombre',
        price: 50000,
        desc: 'Cadena con baño de oro blanco, resistente al agua y perfumes, con un color plateado hermoso'
    }

    return(
        <Container>
             <Product>
                    <Info>
                        <h2>Details</h2>
                        <p>{product.desc}</p>
                    </Info>
                    <ContainerImage>
                        <Image src={product.img}  width='450' height='450' alt=''/>
                        <Name>
                            <h3>{product.name}</h3>
                        </Name>
                    </ContainerImage>
                    <ContainerDetails>
                        <Details>
                            <Paragraph>grosor</Paragraph>
                            <H3>6MM</H3>
                        </Details>
                        <Details>
                            <Paragraph>largo</Paragraph>
                            <H3>50cm</H3>
                        </Details>
                        <Details>
                            <Paragraph>garantia</Paragraph>
                            <H3>1 año</H3>
                        </Details>
                    </ContainerDetails>
                </Product>
                <ContainerPrice>
                    <Price>${product.price}</Price>
                    <Button>Add to cart</Button>
                </ContainerPrice>
        </Container>
    );
}

const Container = styled.div`
    background-color: #000;
    color: #fff;
`;

const Name = styled.div`
    text-align: center;
`;

const ContainerImage = styled.div`
    position: relative;
    border: 1px solid #fff;

    @media(max-width: 950px) {
        grid-column: 1/3;
        grid-row: 1/2;
        width: 30rem;
        height: 30rem;
        margin: auto;
    }
`;

const ContainerPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 1rem;
    color: #fff;
    margin: 2rem auto 0 auto;
    width: 68rem;

    @media(max-width: 9500px) {
        & {
            width: 46rem;
        }
    }
    @media(max-width: 680px) {
        width: 25rem;
    }

`;

const ContainerDetails = styled.div`
    width: 100%;
    height: 100%
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 950px) {
        margin-top: 1.5rem;
    }
`;

const Product = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    text-align: center;
    width: 100rem;
    align-items: center;
    margin: 10rem auto;

    @media(max-width: 950px) {
        &{
            width: 65rem;
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media(max-width: 750px) {
        width: 30rem;
    }
`;

const Info = styled.div`
    padding: 5rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px) {
        padding: 2rem;
    }
`;

const Details = styled.div`
    margin: 2rem;
`;

const Paragraph = styled.p`
    font-size: 1.6rem;
    margin: 0;
`;

const Price = styled.h3`
    color: #000;
`;

const H3 = styled.h3`
    color: #fff;
`;

const Button = styled.button`
    border: none;
    background-color: #000;
    color: #fff;
    height: 3rem;
    width: 9rem;
    cursor: pointer;
    font-weight: 400;

    &:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
    }
`;