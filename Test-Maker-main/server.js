const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();

// Configuração do CORS
app.use(cors());
app.use(express.json());

// Serve arquivos estáticos da pasta atual
app.use(express.static(path.join(__dirname)));

// Rota para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para processar a requisição do frontend
app.post('/ia', async (req, res) => {
    const { text } = req.body;
    const response = await axios.post("http://localhost:11434/api/generate", {
        model: "llama3",
        prompt: text,
        stream: false,
    });
    res.json(response.data.response.toString());
});

app.listen(8080, () => {
    console.log("Server on http://10.0.0.116:8080");
});
