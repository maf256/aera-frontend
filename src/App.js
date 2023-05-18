import styled, {css} from "styled-components";
import React, { useState } from 'react';
import { cardNumberValidation, cardDateValidation, cardCVVValidation } from './util/validation'
import {ReactComponent as MastroSvg} from './Icons/maestro_scheme.svg';
import {ReactComponent as MasterSvg} from './Icons/master_card_scheme.svg';
import {ReactComponent as VisaSvg} from './Icons/visa_scheme.svg';
import {ReactComponent as AmexSvg} from './Icons/amex_scheme.svg';
import {ReactComponent as DinerSvg} from './Icons/diners_scheme.svg';
import {ReactComponent as InfoSvg} from './Icons/InfoIcon.svg';
import cardSvg from './Icons/CardIcon.svg'
import { colors } from './theme'

function App() {
  const [errors, setErrors] = useState({
    cardNumber: '',
    cardDate: '',
    cardCVV: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    for(let i=0; i < e.target.length; i++){
      formData[e.target[i].name] = e.target[i].value
    }
    const cardNumber = cardNumberValidation(formData.cardNumber)
    const cardDate = cardDateValidation(formData.cardDate)
    const cardCVV = cardCVVValidation(formData.cardCVV)
    setErrors({ cardNumber, cardDate, cardCVV })

    if(!cardNumber.length && !cardDate.length && !cardCVV.length) {
      alert(`
            Card Number is: ${formData.cardNumber}
            Card Date is: ${formData.cardDate}
            Card CVV is: ${formData.cardCVV}
          `)
    }
  };

  return (

    <Appcontainer>
      <PaymentConteinter>
        <CardInformationContainer>
          <p>Card information</p>
          <div>
            <VisaSvg />
            <MasterSvg />
            <MastroSvg />
            <AmexSvg />
            <DinerSvg />
            <InfoSvg />
          </div>
        </CardInformationContainer>
        <Form onSubmit={handleSubmit}>
          <FormControl >
            <Label>
              <InputCardNumber 
                type="number" 
                name="cardNumber" 
                placeholder="Card Number"
              />
              {errors.cardNumber && <SpanError>{errors.cardNumber}</SpanError>}
            </Label>
          </FormControl>
          <FormControl>
            <InputCardDate 
              type="text" 
              name="cardDate"
              placeholder="MM/YY"
            />
            {errors.cardDate && <SpanError>{errors.cardDate}</SpanError>}
          </FormControl>
          <FormControl>
            <InputCardCVV 
              type="number" 
              name="cardCVV"  
              placeholder="CVV"
            />
            {errors.cardCVV && <SpanError>{errors.cardCVV}</SpanError>}
          </FormControl>
          <InputSumbmit type="submit" value="Pay"/>
        </Form>
      </PaymentConteinter>
    </Appcontainer>
  );
}

export default App;

const Appcontainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.secondary[200]};
  display: flex;
  justify-content: center;
  align-items: center;
`

const PaymentConteinter = styled.div`
  width: 400px;
  background: ${colors.primary[400]};
  padding: 20px;
`

const CardInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    margin: 5px;
  }
` 

const Form = styled.form`
  width: 100%;
  display: grid;
  input {
    width: 100%;
    height: 40px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  :nth-child(1) {
    grid-area: card;
  }
  :nth-child(2) {
    grid-area: date;
  }
  :nth-child(3) {
    grid-area: cvv;
  }
  :nth-child(4) {
    grid-area: submit;
  }
  grid-template-areas:
  "card card"
  "date cvv"
  "submit submit";
  grid-gap: 8px;
`
const FormControl = styled.div``


const removeinputArrow = css`
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  [type=number] {
    -moz-appearance: textfield;
  }
`

const Label = styled.label`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 10px;
    top: 2px;
    width: 30px;
    height: 25px;
    background: url(${cardSvg});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
  }

`
const InputCardNumber = styled.input`

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-left: 45px;
  ${removeinputArrow}
`
const InputCardDate = styled.input`
  border-bottom-left-radius: 15px;
  padding-left: 10px;
`
const InputCardCVV = styled.input`
  border-bottom-right-radius: 15px;
  padding-left: 10px;
  ${removeinputArrow}
`
const InputSumbmit = styled.input`
  margin-top: 10px;
  border-radius: 15px;
`

const SpanError = styled.span`
  color: ${colors.primary[500]};
  font-size: 12px;
  padding-left: 10px;
`