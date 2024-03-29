// Importações
const express = require('express');
const { join } = require('path');
const path = require('path');
const homeRoutes = require('./src/routes/home');




// Variaveis
const app = express();
const port = 3000;

// Configuraçoes //Middlewares
app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));
app.use(express.static(path.resolve("src", "public")));

// Rotas
app.use(homeRoutes);

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))
// npm run dev -> nodemon | npm start -> node