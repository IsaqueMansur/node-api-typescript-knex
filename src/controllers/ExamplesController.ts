import { Body, Get, JsonController, Post } from "routing-controllers";
import knex from "../config/database";

@JsonController("/examples")
export class UserController {
  @Get("/")
  private welcome(req: Request) {
    return { message: "Here is main of examples routes (GET)" };
  }

  @Get("/withData")
  private async welcomeWithData(req: Request) {
    const data = await knex
      .select("id as identificador", "description")
      .from("teste")
      .withSchema(process.env.POSTGRE_DATABASE_SCHEMA);
    return {
      message: "Here is method with database consult of examples routes (GET)",
      database_response: data,
    };
  }

  @Post("/")
  private async postExample(@Body() body: any) {
    await knex("teste")
      .insert(body)
      .withSchema(process.env.POSTGRE_DATABASE_SCHEMA);
    return {
      message: "Here is main of examples routes (POST)",
      your_body: body,
    };
  }
}
