import { CreditCardStatusEnum } from "../Enumerables/CreditCardStatus.enum";
import { MessagesEnum } from "../Enumerables/Messages.enum";
export class CreditCardResponse {
    public creditCardStatus: CreditCardStatusEnum ;
    public message: MessagesEnum;
    
    constructor(){
        this.creditCardStatus = CreditCardStatusEnum.Valid;
        this.message = MessagesEnum.Valid
    }
}