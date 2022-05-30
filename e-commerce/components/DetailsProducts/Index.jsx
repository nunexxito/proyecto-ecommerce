import Image from 'next/image'
import {Container, Product, Info, ContainerImage, Name, ContainerDetails, Details, Paragraph, H3, ContainerPrice, Price, Button} from './styles'

export default function DetailsProducts() {
    return(
        <Container>
             <Product>
                    <Info>
                        <h2>Details</h2>
                        <p>esto es una cadena muy bonita, en color dorado, bañada en oro de 18k</p>
                    </Info>
                    <ContainerImage>
                        <Image src='/img/cad.png'  width='450' height='450' alt=''/>
                        <Name>
                            <h3>Nombre</h3>
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
                    <Price>$50.000</Price>
                    <Button>Add to cart</Button>
                </ContainerPrice>
        </Container>
    );
}

