import Image from 'next/image'
import {Container, ContainerImage, Button} from './styles'

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