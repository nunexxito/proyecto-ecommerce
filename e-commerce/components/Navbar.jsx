import React, {useState} from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function Navbar() {
    const [estado, setEstado] = useState(true);

    const cambiarEstado = () => setEstado(prev => !prev)

    return(
        <Container>
            <ContainerOptions>
                <Button>
                    {estado ? <DragHandleOutlinedIcon className="menu" onClick={cambiarEstado}/> : <CloseOutlinedIcon className="menu" onClick={cambiarEstado}/>}
                </Button>
                {
                    estado ?
                        <ContainerText className="textDesktop">
                            <Text>Products</Text>
                            <Text>Work</Text>
                            <Text>Contact</Text>
                        </ContainerText>
                        :
                        <ContainerText className="textMobile">
                            <Text>Products</Text>
                            <Text>Work</Text>
                            <Text>Contact</Text>
                        </ContainerText>
                }
            </ContainerOptions>
            {
                estado ?
                <>
                    <Logo>
                        <h1>BUVOLI</h1>
                    </Logo>
                    <ContainerInfo>
                        <Cart>
                            <ShoppingCartOutlinedIcon className="shoppingCart"/>
                            <Counter>2</Counter>
                        </Cart>
                    </ContainerInfo>
                </> 
                : 
                <></>
            }
        </Container>
    );
}

const Container = styled.div`
    background-color: #000;
    color: #fff;
    height: 9rem;
    padding: 0 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: fixed;
    width: 100vw;
    z-index: 2;
    position: absolute;
    top: 0;

    @media(max-width: 800px) {
        padding: 0 2rem;
    }
`;

const ContainerText = styled.div`
    display: flex;
    align-items: center;
`;

const ContainerOptions = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media(max-width: 680px) {
        .textDesktop {
            display: none;
        }
    }
`;

const Button = styled.button`
    display: none;
    border: none;
    background: none;
    color: #fff;
    cursor: pointer;
    padding-top: 1rem;
    
    .menu {
        font-size: 2.5rem;
    }

    @media(max-width: 680px) {
        & {
            display: inline;
        }
    }
`;

const Text = styled.h3`
    margin: 0 1rem;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.6rem;

    &:hover {
        border-bottom: 1px solid #fff;
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Cart = styled.div`
    position: relative;
    cursor: pointer;
    margin: 0 .4rem;

    .shoppingCart {
        font-size: 2.5rem;
        color: #fff;
    }
`;

const Counter = styled.div`
    position: absolute;
    right: -0.6rem;
    top: -0.6rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    font-size: 1.2rem;
    color: #000;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;