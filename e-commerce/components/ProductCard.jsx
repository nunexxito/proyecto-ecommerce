import Image from 'next/image'
import styled from 'styled-components';

export default function ProductCard() {
    return(
        <Container>
            <ContainerImage>
                <Image src='/img/cub.png'  width='450' height='450' alt=''/>
                <Button className='btnPC'>Add to cart</Button>
            </ContainerImage>
            <div>
                <h3>Nombre</h3>
                <h4>$50.000</h4>
            </div>
        </Container>
    );
}

const Container = styled.div`
    cursor: pointer;
`;

const ContainerImage = styled.div`
    overflow: hidden;
    position: relative;

    .btnPC {
        opacity: 0;
    }
    &:hover {
        .btnPC {
            opacity: 1;
        }
    }

    @media (max-width: 1015px) {
        .btnPC {
            display: none;
        }
    }
`;

const Button = styled.button`
    position: absolute;
    border: 1px solid #000;
    padding: 1rem;
    width: 10rem;
    background-color: #fff;
    bottom: 0;
    left: 33.3%;
    margin: 2rem 0;
    cursor: pointer;
    font-weight: 700;

    &:hover {
        background-color: #000;
        color: #fff;
        border: 1px solid #fff;
    }
`;