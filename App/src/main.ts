var readline = require('readline');

var line = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

line.question("Insert your credit card's number: ", function(creditCard) {
    var creditCardResponse: CreditCardResponse = InputVerification.VerifyInput(creditCard);

    if(creditCardResponse.creditCardStatus == CreditCardStatusEnum.Valid) {
      creditCardResponse = CreditCardVerification.LuhnValidation(creditCard);
    }

    console.log(creditCardResponse.message)
    readline.close();
    process.exit(creditCardResponse.creditCardStatus)
  });