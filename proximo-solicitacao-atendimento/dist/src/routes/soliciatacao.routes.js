"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solicitacaoRoutes = void 0;
var express_1 = require("express");
var createSolicitacao_1 = __importDefault(require("../app/useCases/solicitacao/createSolicitacao"));
var solicitacaoRoutes = (0, express_1.Router)();
exports.solicitacaoRoutes = solicitacaoRoutes;
solicitacaoRoutes.get("/", function (request, response) {
    return response.status(200).json({ "message": "listar todas as solicitações" });
});
solicitacaoRoutes.post("/create", function (request, response) {
    return (0, createSolicitacao_1.default)().handle(request, response);
});
