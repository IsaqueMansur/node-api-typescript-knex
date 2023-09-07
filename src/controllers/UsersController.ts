import { Get, JsonController, Param, Post } from 'routing-controllers';
import knex from '../config/database';

@JsonController('/users')
export class UserController {
  @Post('/')
  createUser(requestBody: Request) {

    return { message: 'Requisição recebida com sucesso', data: requestBody };
  }

  @Get('/:teste')
  async teste(@Param('teste') teste: string) {
    try {
      const x = await knex
      .select('id')
      .from('dev.teste')
     return {x}
    } catch (e) {
      console.log(e)
    }
  }
}
