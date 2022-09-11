import { CreditCardResponse } from "../Models/CreditCardResponse.Model";
import { MessagesEnum } from "../Enumerables/Messages.enum";
import { CreditCardStatusEnum } from "../Enumerables/CreditCardStatus.enum";
import { InputVerification } from "./InputVerification";
import { CreditCardVerification } from "./CreditCardVerification";

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
    
  
    line.close();
    process.exit(1)
  });