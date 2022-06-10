import ProductCard from "../ProductCard/Index";
import {Container, Wrapper} from './styles'

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

