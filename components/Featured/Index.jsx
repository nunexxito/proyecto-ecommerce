import DetailsProducts from '../DetailsProducts/Index';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import {Container, ContainerProducts} from './styles';

export default function Featured() {
    return(
        <Container>
            <ArrowBackIosOutlinedIcon className='arrow'/>
            <ContainerProducts>
               <DetailsProducts/>
            </ContainerProducts>
            <ArrowForwardIosOutlinedIcon className='arrow'/>
        </Container>
    );
}