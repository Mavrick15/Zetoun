const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const { logger } = require('./log/logger');
const errorHandler = require('./middleware/errorHandler');

// Charger les variables d'environnement
dotenv.config();

// Connexion à la base de données
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/formations', require('./routes/formationRoutes'));
app.use('/api/telecom-opinions', require('./routes/telecomOpinionRoutes')); // Nouvelle route pour les opinions télécom
app.use('/api/enrollments', require('./routes/enrollmentRoutes')); // Nouvelle route pour les enrôlements

// Route de test
app.get('/', (req, res) => {
  logger.info('GET / - API is running...');
  res.send('API is running...');
});

// Middleware d'erreur
app.use(errorHandler);

const PORT = process.env.PORT || 5010;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
});
