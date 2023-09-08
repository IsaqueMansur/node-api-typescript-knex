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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/controllers/ExamplesController.ts
var ExamplesController_exports = {};
__export(ExamplesController_exports, {
  UserController: () => UserController
});
module.exports = __toCommonJS(ExamplesController_exports);
var import_routing_controllers = require("routing-controllers");

// src/config/database.ts
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

// src/controllers/ExamplesController.ts
var UserController = class {
  welcome(req) {
    return { message: "Here is main of examples routes (GET)" };
  }
  welcomeWithData(req) {
    return __async(this, null, function* () {
      const data = yield database_default.select("id as identificador", "description").from("teste").withSchema(process.env.POSTGRE_DATABASE_SCHEMA);
      return {
        message: "Here is method with database consult of examples routes (GET)",
        database_response: data
      };
    });
  }
  postExample(body) {
    return {
      message: "Here is main of examples routes (POST)",
      your_body: body
    };
  }
};
__decorateClass([
  (0, import_routing_controllers.Get)("/")
], UserController.prototype, "welcome", 1);
__decorateClass([
  (0, import_routing_controllers.Get)("/withData")
], UserController.prototype, "welcomeWithData", 1);
__decorateClass([
  (0, import_routing_controllers.Post)("/"),
  __decorateParam(0, (0, import_routing_controllers.Body)())
], UserController.prototype, "postExample", 1);
UserController = __decorateClass([
  (0, import_routing_controllers.JsonController)("/examples")
], UserController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserController
});
