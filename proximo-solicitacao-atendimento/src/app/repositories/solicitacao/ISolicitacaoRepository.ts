interface ISolicitacaoRepository {
    list(): Promise<any>;
    create(data): Promise<any>;
    getSolicitacao(id): Promise<any>;
    listSolicitacaoCpf(cpf: any);
    listSolicitacaoTelefone(nTelefone: any);
    listSolicitacaoUserFacebook(userFacebook: any);
}

export { ISolicitacaoRepository }