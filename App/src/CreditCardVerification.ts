class CreditCardVerification {
    static LuhnValidation(input : string): CreditCardResponse  {
        var response: CreditCardResponse = new CreditCardResponse();

        //reversing to facilitate the traversing of the array later on
        var numbers = Array.from(input).reverse();

        var sum = numbers.map((char, index)=> {
            var digit = Number(char);

            //if the digit's index is odd(which means even since we start from 1 unlike the array index), we multiply by 2 
            digit = digit + (index % 2)*digit;

            //subtract 9 if it's greater than 10
            digit -= digit > 9 ? 9 : 0;

            return digit;
        })
        .reduce((result, next) =>  result + next );

        if(sum % 10 !== 0){
            response.creditCardStatus = CreditCardStatusEnum.Invalid;
            response.message = MessagesEnum.Invalid;
        }
        return response;
    }
}