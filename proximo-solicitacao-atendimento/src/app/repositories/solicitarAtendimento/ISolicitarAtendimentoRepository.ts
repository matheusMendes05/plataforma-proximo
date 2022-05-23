

interface ISolicitarAtendimentoRepository {
    list(): Promise<any>;
    create(usuarioID: any, servicoID: any, NSolicitacao: any): Promise<any>;
}

export { ISolicitarAtendimentoRepository }