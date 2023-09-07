// eslint-disable-next-line @typescript-eslint/no-var-requires
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.POSTGRE_DATABASE_SERVER_IP,
    port: process.env.POSTGRE_DATABASE_PORT,
    user: process.env.POSTGRE_DATABASE_USERNAME,
    password: process.env.POSTGRE_DATABASE_PASSWORD,
    database: process.env.POSTGRE_DATABASE_NAME,
    searchPath: [process.env.POSTGRE_DATABASE_SCHEMA],
    timezone: 'America/Sao_Paulo'
  }
});

export default knex;
