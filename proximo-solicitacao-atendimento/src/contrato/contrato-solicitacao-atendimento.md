### Contrato Solicitacao Atendimento ###

Resumo: A Criação deste microserviço se deu por conta das limitações na passagem de parâmetro da Ferramenta OmniChannel code7 para os canais de: WhatsApp, Messenger e dentre outros... o microserviço de *proximo-solicitacao-atendimento* será responsável por criar um histórico de serviços escolhidos pelo usuário, que por sua vez, retornará através de uma resposta de requisição  o útimo serviço escolhido pelo usuário. Como milhares de usuário usarão a plataforma de atendimento ao cidadão, seria interessante essa funcionabilidade ser escalável e que estaja em uma arquiterura de microsserviço. 


ROTAS Solicitacao -> Responsável por manter um histórico de serviços escolhidos pelo o usuário

*Lista Todas as solicitações de atendimento*
GET - /solicitacao
*Lista uma solicitacao especifica pelo ID*
POST - /solicitacao
{
    "id": STRING, 
}
*Retorna sempre a última solicitacao de atendimento pelo CPF do usuário*
*Caso o fluxo de atendimento seja o webchat, o usuário será identificado pelo CPF*
POST - /solicitacao/cpf 
{
    "cpf": STRING, 
}
*Retorna sempre a última solicitacao de atendimento pelo Nº de telefone*
*Caso o fluxo de atendimento seja pelo WPP, o usuário será identificado pelo Nº do Telefone*
POST - /solicitacao/telefone 
{
    "telefone": STRING,  
}
*Retorna sempre a última solicitacao de atendimento pelo usuário do messenger/facebook*
*Caso o fluxo de atendimento seja pelo messenger, o usuário será identificado pelo seu id do facebook*
POST - /solicitacao/messenger 
{
    "messengerID": STRING
}
*Cadastrar uma Solicitacao*
*Atributo com • Serão criados automaticamente no cadastro de uma soliciatacao*
POST - /solicitacao/create 
{
   •"id":            uid,
    "userID":        uid,      -> *ID usuario gerado pelo Keycloak*
   •"NSolicitacao":  NUMBER,   -> *Atributo gerado pelo microsservico solicitacao-atendimento*
    "nomeUsuario":   STRING,   -> *Nome do usuario logado na Devland*
    "cpf":           STRING,   -> *CPF do usuario logado na Devland*
    "telefone":      STRING,   -> *Telefone do usuario logado na Devland*
    "messengerID":   STRING,   -> *ID USER facebook do usuario logado na Devland*
    "orgao":         STRING,   -> *Orgao do Servico escolhido pelo usuario na Devland*
    "servico":       STRING,   -> *Servico escolhido pelo usuario logado na Devland*
    "canal":         STRING,   -> *Canal escolhido pelo usuario na Devland WEBCHAT/WHATSAPP/MESSENGER*
    "chatSessionID"  STRING,   -> *ID Sessao chat do usuario (undefined) caso seja WPP/Messenger*
   •"status":        BOOLEAN,  -> *Atriubuto que indica se uma solicitação virou um atendimento*
   •"CriadoEm":      DateTime, -> *Criado automaticamente na criação da solicitação*
   •"AlteradoEm":    DateTime, -> *Criado automaticamente na criação da solicitação*
}
*Atualiza o Status de uma solicitacao para TRUE caso uma solicitação se transfome em atendimento*
UPDATE - /solicitacao/update
{
    "status": BOOLEAN,
}
