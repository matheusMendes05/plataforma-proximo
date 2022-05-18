
interface IServicoRepository {
    list(): Promise<any>;
    create(data: any): Promise<any>;
}

export { IServicoRepository }