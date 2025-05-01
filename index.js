const express = require("express");
const cors = require("cors");
const db = require("./firebase-config");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/posts", async (req, res) => {
  try {
    const { texto } = req.body;

    if (!texto) {
      return res.status(400).json({ error: "Texto é obrigatório" });
    }

    const dataAtual = new Date();

    const docRef = await db.collection("posts").add({
      texto,
      data: dataAtual.toISOString(),
    });

    res.status(201).json({ id: docRef.id, message: "Post criado com sucesso" });
  } catch (error) {
    console.error("Erro ao salvar no Firebase:", error);
    res.status(500).json({ error: "Erro ao salvar post" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
