import { Address, Cell, Contract, ContractProvider, Sender } from "@ton/core";

export default class Lottery implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell, data: Cell }) {}
    async getTotalBalance(provider:ContractProvider) {
        const {stack} = await provider.get("totalBalance",[]);
        return stack.readBigNumber();
    }

    async totalTokens(provider:ContractProvider) {
        const {stack} = await provider.get("totalTokens",[]);
        return stack.readBigNumber();
    }

    async getUserTokens(provider:ContractProvider) {
        const{stack} = await provider.get("getUserTokens",[]);
        return stack.readLispList();
    }
    async getLastWinner(provider:ContractProvider) {
        const{stack} = await provider.get("getLastwinner",[]);
        return stack.skip(2).readAddress();
    }
    async purchaseTicket(provider:ContractProvider,via:Sender) {
        await provider.internal(via,{
            value:'1.0'
        });
    }
}