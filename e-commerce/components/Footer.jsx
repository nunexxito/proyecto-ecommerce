import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

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

const Container = styled.div`
background-color: #000;
width: 100%;
color: #fff;
padding: 2rem;
border-top: 1px solid #fff;
margin-top: 5rem
`;

const Input = styled.input`
border: none;
border-radius: .5rem;
background-color: #fff;
padding: .5rem;
width: 30rem;
margin: .5rem 0;
outline: none;

@media(max-width: 800px) {
    margin: .5rem auto;
}
`;

const Button = styled.button`
width: 30rem;
border: none;
background-color: #000;
outline: none;
padding: 1rem;
color: #fff;
border-bottom: 1px solid #fff;
cursor: pointer;
font-weight: 700;
margin: 1rem 0;

&:hover {
    background-color: rgba(255, 255, 255, .08);
}

@media(max-width: 800px) {
    margin: 1rem auto;
}
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const ContainerLogin = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 3rem;
border-bottom: 1px solid #fff;

@media(max-width: 800px) {
    flex-direction: column;
    text-align: center;
}
`;

const SocialContainer = styled.div`
margin-top: 2rem;
.media {
    font-size: 3rem;
    cursor: pointer;
    margin-right: 1rem;
}
`;

const H3 = styled.h3``;