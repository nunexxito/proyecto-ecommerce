import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {Container, ContainerLogin, H3, Form, Input, Button, SocialContainer} from './styles'

export default function Footer() {
    return(
        <Container>
            <ContainerLogin>
                <div>
                    <h2>BUVOLI</h2>
                    <p>somos una empresa que se preocupa por la calida y no par la cantidad</p>
                    <p>para una asesoria mas personalizada puedes comunicarte con nosotros por nuestras redes sociales</p>
                </div>
                <div>
                    <H3>log in</H3>
                    <Form>
                        <Input type="email" />
                        <Input type="password" />
                        <Button>Enviar</Button>
                    </Form>
                </div>
            </ContainerLogin>
            <SocialContainer>
                <InstagramIcon className='media'/>
                <WhatsAppIcon className='media'/>
                <FacebookOutlinedIcon className='media'/>
            </SocialContainer>
        </Container>
    );
}