"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solicitacao = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Solicitacao = /** @class */ (function () {
    function Solicitacao() {
    }
    Solicitacao.prototype.generateUuid = function () {
        this.id = (0, uuid_1.v4)().replace(/-/g, '');
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)('uuid'),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Solicitacao.prototype, "generateUuid", null);
    __decorate([
        (0, typeorm_1.Column)('uuid'),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "userID", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "NSolicitacao", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "nomeUsuario", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "cpf", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "telefone", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "messengerID", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "orgao", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "servico", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "canal", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "chatSessionID", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Solicitacao.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Solicitacao.prototype, "criadoEm", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Solicitacao.prototype, "alteradoEm", void 0);
    Solicitacao = __decorate([
        (0, typeorm_1.Entity)('solicitacao')
    ], Solicitacao);
    return Solicitacao;
}());
exports.Solicitacao = Solicitacao;
