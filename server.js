const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Servidor funcionando</h1>
        <form method="post" action="/enviar">
          <input type="text" name="nome" placeholder="Seu nome" />
          <button type="submit">Enviar</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/enviar", (req, res) => {
  const { nome } = req.body;

  res.send(`Recebido com sucesso: ${nome || "sem nome"}`);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${port}`);
});