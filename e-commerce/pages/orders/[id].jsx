import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import {Container, ContainerInfo, Info, Details, StateProduct, State, ContainerCheck, ContainerPrice, ContainerItem, ContainerShipping, ContainerTotal, ButtonCart} from './Style'

export default function Order() {
    const status = 0;

    const statusClass = (index) => {
        if(index - status < 1) return 'done';
        if(index - status === 1) return 'inProgress';
        if(index - status > 1) return 'undone';
    };

    return(
        <Container>
            <ContainerInfo>
                <Info>
                    <Details>
                        <h3>Id</h3>
                        <p>#123435</p>
                    </Details>
                    <Details>
                        <h3>Person</h3>
                        <p>Santiago Nuñez</p>
                    </Details>
                    <Details>
                        <h3>Address</h3>
                        <p>Cll 69 #12-34</p>
                    </Details>
                    <Details>
                        <h3>Total</h3>
                        <p>$110.000</p>
                    </Details>
                </Info>
                <StateProduct>
                    <State className={statusClass(0)}>
                        <PaymentsOutlinedIcon className='item'/>
                        <h4>Payment</h4>
                        <ContainerCheck>
                            <CheckOutlinedIcon className='check'/>
                        </ContainerCheck>
                    </State>
                    <State className={statusClass(1)}>
                        <StoreOutlinedIcon className='item'/>
                        <h4>Preparing shipment</h4>
                        <ContainerCheck>
                            <CheckOutlinedIcon className='check'/>
                        </ContainerCheck>
                    </State>
                    <State className={statusClass(2)}>
                        <FlightTakeoffOutlinedIcon className='item'/>
                        <h4>On the way</h4>
                        <ContainerCheck>
                            <CheckOutlinedIcon className='check'/>
                        </ContainerCheck>
                    </State>
                    <State className={statusClass(3)}>
                        <AssignmentTurnedInOutlinedIcon className='item'/>
                        <h4>Delivered</h4>
                        <ContainerCheck>
                            <CheckOutlinedIcon className='check'/>
                        </ContainerCheck>
                    </State>
                </StateProduct>
            </ContainerInfo>
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
                <ButtonCart>Paid</ButtonCart>
            </ContainerPrice>
        </Container>
    );
}