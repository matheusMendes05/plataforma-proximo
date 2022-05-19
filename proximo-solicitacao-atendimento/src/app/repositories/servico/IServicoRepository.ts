
interface IServicoRepository {
    list(): Promise<any>;
    create(data: any): Promise<any>;
    checkServicoByName(servico: string): Promise<any>;
}

export { IServicoRepository }