interface ISolicitacaoAtendimentoRepository {
    list(): Promise<any>;
    create(data): Promise<any>;
    getSolicitacao(id): Promise<any>;
    listSolicitacaoCPF(cpf: string);
    listSolicitacaoTELEFONE(telefone: string);
    listSolicitacaoMESSENGERID(messengerID: string);
}

export { ISolicitacaoAtendimentoRepository }