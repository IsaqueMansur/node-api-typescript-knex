"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/config/database.ts
var database_exports = {};
__export(database_exports, {
  default: () => database_default
});
module.exports = __toCommonJS(database_exports);
var knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.POSTGRE_DATABASE_SERVER_IP,
    port: process.env.POSTGRE_DATABASE_PORT,
    user: process.env.POSTGRE_DATABASE_USERNAME,
    password: process.env.POSTGRE_DATABASE_PASSWORD,
    database: process.env.POSTGRE_DATABASE_NAME,
    searchPath: [process.env.POSTGRE_DATABASE_SCHEMA],
    timezone: "America/Sao_Paulo"
  }
});
var database_default = knex;
