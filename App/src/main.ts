import { CreditCardResponse } from "../Models/CreditCardResponse.Model";
import { MessagesEnum } from "../Enumerables/Messages.enum";
import { CreditCardStatusEnum } from '../Enumerables/CreditCardStatus.enum';
import { InputVerification } from "./InputVerification";
import { CreditCardVerification } from "./CreditCardVerification";

async function main() {

  var readline = require('readline');
  
  var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
  })

    console.log("Insert your credit card's number: ");
    const it = rl[Symbol.asyncIterator]();
    var line = await it.next();
    var creditCard = line.value;
    
    creditCard = creditCard.replace(/\s/g, '');
    
    var creditCardResponse: CreditCardResponse = InputVerification.VerifyInput(creditCard);
    
    if(creditCardResponse.creditCardStatus == CreditCardStatusEnum.Valid) {
      creditCardResponse = CreditCardVerification.LuhnValidation(creditCard);
    }
    
    console.log(creditCardResponse.message)
    process.exit(creditCardResponse.creditCardStatus)
}
main();