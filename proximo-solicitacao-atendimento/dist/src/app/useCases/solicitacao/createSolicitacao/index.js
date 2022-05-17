"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SolicitacaoRepository_1 = require("../../../repositories/solicitacao/implements/SolicitacaoRepository");
var createSolicitacaoUseCase_1 = require("./createSolicitacaoUseCase");
var createSolicitacaoController_1 = require("./createSolicitacaoController");
exports.default = (function () {
    var solicitacaoRepository = new SolicitacaoRepository_1.SolicitacaoRepository();
    var createSolicitacaoUseCase = new createSolicitacaoUseCase_1.CreateSolicitacaoUseCase(solicitacaoRepository);
    var createSolicitacaoController = new createSolicitacaoController_1.CreateSolicitacaoController(createSolicitacaoUseCase);
    return createSolicitacaoController;
});
