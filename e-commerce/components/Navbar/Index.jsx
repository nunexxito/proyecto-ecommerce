import React, {useState} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {Container, ContainerOptions, Button, ContainerText, Text, Logo, ContainerInfo, Cart, Counter} from './styles'

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