class CreditCardResponse {
    public creditCardStatus: CreditCardStatusEnum ;
    public message: MessagesEnum;
    
    constructor(){
        this.creditCardStatus = CreditCardStatusEnum.Valid;
        this.message = MessagesEnum.Valid
    }
}