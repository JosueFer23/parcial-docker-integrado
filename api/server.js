const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.json({
    estudiante: { nombre: 'FERNANDO JOSUE GONZALEZ CUADRA', expediente: '25772', codigo: 'GC22I04002' },
    servicio: 'parcial-api',
    now: new Date().toISOString()
  });
});

app.get('/health', (_req, res) => res.json({ status: 'OK' }));

app.listen(PORT, '0.0.0.0', () => console.log(`API http://localhost:${PORT}`));
