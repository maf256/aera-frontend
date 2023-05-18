export const cardNumberValidation = (cardNumber) => {  
    if (!cardNumber) {
      return 'Card number is required';
    }
    if (cardNumber.length !== 16) {
      return 'Card number must 16 digits';
    }
    return ''
} 

export const cardDateValidation = (cardDate) => {  

    const cardDateRegExp = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    if (!cardDate) {
      return 'Card date is required';
    } else if (!cardDateRegExp.test(cardDate)) {
      return 'Invalid card date';
    }
    return ''
} 

export const cardCVVValidation = (cardCVV) => {  
    if (cardCVV.length !== 3) {
      return 'Card number must 3 digits';
    }
    return ''
} 
