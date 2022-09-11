import { CreditCardResponse } from "../Models/CreditCardResponse.Model";
import { MessagesEnum } from "../Enumerables/Messages.enum";
import { CreditCardStatusEnum } from "../Enumerables/CreditCardStatus.enum";
export class InputVerification {
    static  VerifyInput(input : string): CreditCardResponse{
        var response: CreditCardResponse = new CreditCardResponse();

        if(isNaN(input as any)){
            response.creditCardStatus = CreditCardStatusEnum.Invalid;
            response.message = MessagesEnum.WrongInputFormat;
            return response;
        }
        else if (input.length < 2 ){
            
            response.creditCardStatus = CreditCardStatusEnum.Invalid;
            response.message = MessagesEnum.WrongLength;
            return response;
        }

        return response;
    }
}