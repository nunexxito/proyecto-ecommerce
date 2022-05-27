import styled from 'styled-components';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

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

const Container = styled.div`
background-color: #000;
color: #fff;
display: flex;
justify-content: space-between;
margin: 10rem;
padding: 3rem;
border: 1px solid #fff;

@media(max-width: 1050px) {
    flex-direction: column;
}

@media(max-width: 680px) {
    margin: 10rem 1rem;
}
`;

//left
const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50rem;

    @media(max-width: 1050px) {
        margin: auto;
        width: 100%;
    }
`;

const Info = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
margin-bottom: 4rem
`;

const StateProduct = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

.item {
    font-size: 3.2rem;
    text-align: center;
    width: 100%;
}

.done{
    
}

.inProgress{
    animation: inProgress 1s ease infinite alternate;
}

@keyframes inProgress {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.undone{
    opacity: 0.3;
}

.undone .check, .inProgress .check {
    display: none;
}

@media(max-width: 1050px) {
    flex-direction: column;
}
`;

const Details = styled.div`
h3 {
    text-align: center;
}
`;

const State = styled.div`
text-align: center;

@media(max-width: 1050px) {
    margin-bottom: 4rem;
}
`;

const ContainerCheck = styled.div`
display: flex;
justify-content: center;

.check {
    font-size: 2rem;
    margin-top: 2rem;
    background-color: #090;
    border-radius: 50%;
}
`;

//right
const ContainerPrice = styled.div`
width: 25rem;
margin: auto 0;

@media(max-width: 1050px) {
    margin: 3rem auto;
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
cursor: not-allowed;
margin: 1rem 0;

&:hover {
    background-color: #fff;
    color: #000;
}
`;