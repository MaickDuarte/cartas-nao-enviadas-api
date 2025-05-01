const admin = require('../firebase/firebase-config');
const db = admin.firestore();

// POST
const postCarta = async (req, res) => {
  const { texto, autor } = req.body; 

  try {
    const docRef = await db.collection('cartas').add({
      texto,
      autor,
      dataCriacao: new Date().toISOString(),
    });

    res.status(201).json({ message: 'Carta criada com sucesso', id: docRef.id });
  } catch (error) {
    console.error('Erro ao criar carta:', error);
    res.status(500).json({ error: 'Erro ao criar carta' });
  }
};

// GET
const getCarta = async (req, res) => {
  const { id } = req.params;

  try {
    const docRef = db.collection('cartas').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Carta não encontrada' });
    }

    res.status(200).json(doc.data());
  } catch (error) {
    console.error('Erro ao obter carta:', error);
    res.status(500).json({ error: 'Erro ao obter carta' });
  }
};

module.exports = { postCarta, getCarta };
