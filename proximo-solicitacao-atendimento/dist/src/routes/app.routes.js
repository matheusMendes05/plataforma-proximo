"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
var express_1 = require("express");
var appRoutes = (0, express_1.Router)();
exports.appRoutes = appRoutes;
appRoutes.get("/", function (request, response) {
    return response.status(200).json([{
            "aplicação": "proximo-solicitacao-atendimento 1.0"
        }]);
});
