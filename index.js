const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const cartaRoutes = require('./routes/cartaRoutes');

app.use('/cartas', cartaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
