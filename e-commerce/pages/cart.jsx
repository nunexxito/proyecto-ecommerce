// import styled from 'styled-components'
import Image from 'next/image'
import styled from 'styled-components';

export default function Cart() {
    return(
        <Container>
            <ContainerProducts>
                <Product>
                    <ContainerImage>
                        <Image src='/img/cub.png'  width='70' height='70' alt=''/>
                    </ContainerImage>
                    <Name>
                        <h2>CUBANA</h2>
                    </Name>
                    <ContainerQuantity>
                        <h3>-</h3>
                        <h3>1</h3>
                        <h3>+</h3>
                    </ContainerQuantity>
                    <Price>
                        <p>$50.000</p>
                    </Price>
                    <Delete>X</Delete>
                </Product>
                <Product>
                    <ContainerImage>
                        <Image src='/img/cad.png'  width='70' height='70' alt=''/>
                    </ContainerImage>
                    <Name>
                        <h2>GRILL</h2>
                    </Name>
                    <ContainerQuantity>
                        <h3>-</h3>
                        <h3>1</h3>
                        <h3>+</h3>
                    </ContainerQuantity>
                    <Price>
                        <p>$50.000</p>
                    </Price>
                    <Delete>X</Delete>
                </Product>
                {/* <table>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>
                            <Image src='/img/cub.png'  width='100' height='100' alt=''/>
                        </td>
                        <td>Cubana</td>
                        <td>2</td>
                        <td>$ 19.00</td>
                    </tr>
                </table> */}
            </ContainerProducts>
            <ContainerPrice>
                <ContainerItem>
                    <p>Item</p>
                    <p>$100.000</p>
                </ContainerItem>
                <ContainerShipping>
                    <p>Shipping</p>
                    <p>$10.000</p>
                </ContainerShipping>
                <ContainerTotal>
                    <h4>Total</h4>
                    <p>$110.000</p>
                </ContainerTotal>
                <ButtonCart>Continue shopping</ButtonCart>
                <ButtonCart>Proceed to checkout</ButtonCart>
            </ContainerPrice>
        </Container>
    );
}

const Container = styled.div`
background-color: #000;
color: #fff;
display: flex;
justify-content: space-between;
margin: 10rem;
padding: 3rem;
border: 1px solid #fff;
// height: 40rem;

@media(max-width: 980px) {
    flex-direction: column;
}
@media(max-width: 680px) {
    margin: 10rem 1rem;
}
`;

//Left

const ContainerProducts = styled.div`
@media(max-width: 980px) {
margin: auto;
}
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
// height: 8rem;
width: 42rem;
border-bottom: 1px solid #fff;
padding-bottom: 1rem;
margin-bottom: 2rem;

@media(max-width: 680px) {
    & {
        display: grid;
        width: 25rem;
        justify-content: center;
        text-align: center;
    }
}
`;

const ContainerImage = styled.div``;

const Name = styled.div``;

const ContainerQuantity = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid #fff;
width: 8rem;
padding: .5rem 1rem;
margin: auto;
`;

const Price = styled.div`
@media(max-width: 680px) {
    grid-row: 4/5;
}
`;

const Delete = styled.button`
border: none;
background: none;
color: #fff;
cursor: pointer;

@media(max-width: 680px) {
    & {
        grid-row: 1/2;
        margin-left: 24rem;
    }
}
`;

//right
const ContainerPrice = styled.div`
width: 25rem;
@media(max-width: 980px) {
    margin: auto;
    }
`;

const ContainerItem = styled.div`
display: flex;
justify-content: space-between;
`;

const ContainerShipping = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid #fff;
padding-bottom: 1rem;
`;

const ContainerTotal = styled.div`
display: flex;
justify-content: space-between;
margin-top: 2rem;
`;

const ButtonCart = styled.button`
border: none;
background-color: #000;
color: #fff;
border-bottom: 1px solid #fff;
width: 100%;
padding: 1rem;
cursor: pointer;
margin: 1rem 0;

&:hover {
    background-color: #fff;
    color: #000;
}
`;