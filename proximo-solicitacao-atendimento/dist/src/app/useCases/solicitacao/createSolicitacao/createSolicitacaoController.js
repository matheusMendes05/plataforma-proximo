"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSolicitacaoController = void 0;
var CreateSolicitacaoController = /** @class */ (function () {
    function CreateSolicitacaoController(solicitacaoUseCase) {
        this.solicitacaoUseCase = solicitacaoUseCase;
    }
    CreateSolicitacaoController.prototype.handle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userID, nomeUsuario, cpf, telefone, messengerID, orgao, servico, canal, chatSessionID, status_1, NSolicitacao, dados, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.body, userID = _a.userID, nomeUsuario = _a.nomeUsuario, cpf = _a.cpf, telefone = _a.telefone, messengerID = _a.messengerID, orgao = _a.orgao, servico = _a.servico, canal = _a.canal, chatSessionID = _a.chatSessionID, status_1 = _a.status;
                        NSolicitacao = this.rendomNSolicitacao();
                        return [4 /*yield*/, this.solicitacaoUseCase.execute({ userID: userID, NSolicitacao: NSolicitacao, nomeUsuario: nomeUsuario, cpf: cpf, telefone: telefone, messengerID: messengerID, orgao: orgao, servico: servico, canal: canal, chatSessionID: chatSessionID, status: status_1 })];
                    case 1:
                        dados = _b.sent();
                        return [2 /*return*/, response.status(200).json(dados)];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, response.status(400).json({ error: error_1 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Gerar numero de solicitacao
    CreateSolicitacaoController.prototype.rendomNSolicitacao = function () {
        var date = new Date();
        var nSolicitacao = ("0" + date.getDate()).substring(-2) + ("0" + (date.getMonth() + 1)).substring(-2) + date.getFullYear() + Math.floor(1000 + Math.random() * 9000);
        return nSolicitacao;
    };
    return CreateSolicitacaoController;
}());
exports.CreateSolicitacaoController = CreateSolicitacaoController;
