const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3000;

// Ativa CORS e JSON
app.use(cors());
app.use(express.json());

// Serve arquivos estáticos da pasta public
app.use(express.static('public'));

// Rota de teste (opcional)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

