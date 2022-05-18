interface ISolicitacaoRepository {
    list(): Promise<any>;
    create(data: any): Promise<any>;
    getSolicitacao(id: any): Promise<any>;
    listSolicitacaoCPF(cpf: string);
    listSolicitacaoTELEFONE(telefone: string);
    listSolicitacaoMESSENGERID(messengerID: string);
}

export { ISolicitacaoRepository }