import PaymentForm from "./../../components/CreditCard";
import Cards from 'react-credit-cards';
import styled from 'styled-components';
import 'react-credit-cards/es/styles-compiled.css';
import { useState } from "react";

function Card() {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');

    return (
        <Container className="Card">
            <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
            />

            <form>
                <InputsContainer>
                    <Input
                        type="tel" name="number" placeholder="Card Number" value={number}
                        onChange={e => setNumber(e.target.value)}
                        onFocus={e => setFocus(e.target.name)}
                    />
                    <p>E.g.: 49..., 51..., 36..., 37...</p>
                    <Input
                        type="text" name="name" placeholder="Name" value={name}
                        onChange={e => setName(e.target.value)}
                        onFocus={e => setFocus(e.target.name)}
                    />
                    <InputSubcontainer>
                        <ExpiryInput
                            type="text" name="expiry" placeholder="Valid Thru" value={expiry}
                            onChange={e => setExpiry(e.target.value)}
                            onFocus={e => setFocus(e.target.name)}
                        />
                        <CvcInput
                            type="tel" name="cvc" placeholder="CVC" value={cvc}
                            onChange={e => setCvc(e.target.value)}
                            onFocus={e => setFocus(e.target.name)}
                        />
                    </InputSubcontainer>
                </InputsContainer>
                <button>FINALIZAR PAGAMENTO</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    max-width: 706px;
    /* width: 100%; */
    height: 225px;
    display: flex; 
    padding-left: 15px;
    padding-top: 20px;
    /* background-color: blue; */
    /* justify-content: left;  */

    button {
        font-size: 12px;
        width: 182px;
        height: 37px;
        background-color: #E0E0E0;
        border: none;
        border-radius: 4px;
        margin-top: 37px;
        margin-left: -290px;
    }
`
const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 20px; */
    margin-left: 30px;
    height: 185px;

        input {
            height: 42px;
            border: 0.5px solid #8E8E8E;
            border-radius: 5px;
            padding-left: 5px;

            &::placeholder {
                font-size: 18px;
                font-weight: 400;
                color: #8E8E8E;
            }
        }

        p {
            font-size: 15px;
            font-weight: 400;
            color: #8E8E8E;
            margin-top: 7px;
            margin-bottom: 15px;
        }
`
const Input = styled.input`
    width: 95%;
`

const InputSubcontainer = styled.div`
    display: flex;
    gap: 5%;
    margin-top: 18px;

`
const ExpiryInput = styled.input`
    width: 65%;
`
const CvcInput = styled.input`
    width: 25%;
`

export default Card