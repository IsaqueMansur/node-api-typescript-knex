import app from './app';

const port = process.env.APP_PORT;
console.log(port)
app.listen(port, () => {
  console.log(`Acessar via: http://localhost:${port}`);
});
