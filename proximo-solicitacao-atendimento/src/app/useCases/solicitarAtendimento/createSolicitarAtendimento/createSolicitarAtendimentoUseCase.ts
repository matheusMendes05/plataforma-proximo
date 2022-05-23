import { ServicoRepository } from "../../../repositories/servico/implements/ServicoRepository";
import { SolicitarAtendimentoRepository } from "../../../repositories/solicitarAtendimento/implements/SolicitarAtendimentoRepository";
import { UsuarioRepository } from "../../../repositories/usuario/implements/UsuarioRepository";

class CreateSolicitarAtendimentoUseCase {
    constructor(
        private usuarioRepository: UsuarioRepository,
        private servicoRepository: ServicoRepository,
        private solicitarAtendimentoRepository: SolicitarAtendimentoRepository
    ) { }

    async execute({ nomeUsuario, cpf, telefone, messengerID, servico, orgao }): Promise<any> {

        const data = { nomeUsuario, cpf, telefone, messengerID, servico, orgao }

        // verificar se usuario já existe
        const user = await this.usuarioRepository.checkUserByCPF(cpf);

        if (!user) {
            const dados = await this.usuarioRepository.create(data);
        }
        // verificar se servico já existe
        const service = await this.servicoRepository.checkServicoByName(servico);

        if (!service) {
            const dados = await this.servicoRepository.create(data);
        }

        const NSolicitacao = this.randomNSolicitacao()

        const solicitacao = await this.solicitarAtendimentoRepository.create(user.id, service.id, NSolicitacao);

        return solicitacao;
    }

    // Gerar numero de solicitacao
    randomNSolicitacao(): string {
        var date = new Date();
        const nSolicitacao = ("0" + date.getDate()).substring(-2) + ("0" + (date.getMonth() + 1)).substring(-2) + date.getFullYear() + Math.floor(1000 + Math.random() * 9000);
        return nSolicitacao;
    }
}

export { CreateSolicitarAtendimentoUseCase }