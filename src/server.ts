import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mustacheExpress from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index.js'; // ⚠️ precisa do .js
import { fileURLToPath } from 'url';



const server = express();


// Converter import.meta.url para __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configura Mustache
server.engine('mustache', mustacheExpress());
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));

// Pasta pública
server.use(express.static(path.join(__dirname, '../public')));

// Rotas
server.use(mainRoutes);

// 404
server.use((req, res) => {
  res.status(404).send('Página não encontrada!!');
});

// Inicializa servidor
server.listen(process.env.PORT || 4001);
