const Formation = require('../models/Formation');
const Enrollment = require('../models/Enrollment');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assurez-vous que ce modèle est importé
const { logger } = require('../log/logger');

const enrollUserToFormation = async (req, res, next) => {
  try {
    const { formationId } = req.body;
    const token = req.headers.authorization?.split(' ')[1]; // Récupérer le token depuis l'en-tête 'Authorization: Bearer <token>'

    logger.info(`Tentative d'enrôlement pour la formation ID: ${formationId}`);
    logger.info(`Token reçu: ${token ? 'Présent' : 'Absent'}`);

    if (!token) {
      logger.warn('Tentative d\'enrôlement sans token d\'authentification.');
      return res.status(401).json({ message: 'Non autorisé : Token manquant.' });
    }

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      logger.info(`Token décodé avec succès. ID utilisateur du token: ${decodedToken.id}`);
    } catch (error) {
      logger.error(`Erreur de vérification du token: ${error.message}`);
      return res.status(401).json({ message: `Non autorisé : Token invalide. Détail: ${error.message}` });
    }

    const userId = decodedToken.id; // L'ID de l'utilisateur est dans la payload du token

    // Vérification de l'ID utilisateur extrait
    if (!userId) {
        logger.error('ID utilisateur manquant après décodage du token.');
        return res.status(401).json({ message: 'Non autorisé : ID utilisateur manquant dans le token.' });
    }
    logger.info(`Utilisateur authentifié (ID: ${userId}) tente de s'enrôler.`);


    if (!formationId) {
      logger.warn('ID de formation manquant dans la requête.');
      return res.status(400).json({ message: 'L\'ID de la formation est requis.' });
    }

    // 1. Récupérer les informations complètes de l'utilisateur et de la formation
    const user = await User.findById(userId);
    const formation = await Formation.findById(formationId);

    if (!user) {
      logger.warn(`Utilisateur non trouvé dans la base de données pour l'ID: ${userId}`);
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }
    if (!formation) {
      logger.warn(`Formation non trouvée pour l'ID: ${formationId}`);
      return res.status(404).json({ message: 'Formation non trouvée.' });
    }

    logger.info(`Utilisateur trouvé: ${user.email}, Formation trouvée: ${formation.title}`);


    // 2. Vérifier si l'utilisateur est déjà inscrit à cette formation
    const existingEnrollment = await Enrollment.findOne({ user: userId, formation: formationId });
    if (existingEnrollment) {
      logger.warn(`Utilisateur ${userId} déjà inscrit à la formation ${formationId}.`);
      return res.status(400).json({ message: 'Vous êtes déjà inscrit à cette formation.' });
    }
    logger.info(`Aucune inscription existante trouvée pour l'utilisateur ${userId} et la formation ${formationId}.`);


    // 3. Créer un nouvel enregistrement d'enrôlement avec toutes les informations
    if (formation.seats > 0) {
      const enrollment = await Enrollment.create({
        user: userId,
        userName: user.name,
        userEmail: user.email,
        formation: formationId,
        formationTitle: formation.title,
        formationDate: formation.date,
        formationLocation: formation.location,
        formationDuration: formation.duration,
        formationInstructor: formation.instructor,
        formationPrice: formation.price,
        formationSeats: formation.seats, // Enregistre le nombre de places au moment de l'enrôlement
        formationLevel: formation.level
      });
      logger.info(`Nouvel enrôlement créé: ${enrollment._id}`);

      // 4. Décrémenter le nombre de places disponibles dans la formation
      formation.seats -= 1;
      await formation.save();
      logger.info(`Nombre de places mis à jour pour la formation ${formationId}. Nouvelles places: ${formation.seats}`);


      logger.info(`Utilisateur ${userId} enrôlé à la formation ${formation.title} (ID: ${formationId}), inscription ID: ${enrollment._id}`);
      res.status(201).json({ message: `Vous avez été enrôlé à la formation "${formation.title}".`, enrollment });
    } else {
      logger.warn(`Tentative d'enrôlement de l'utilisateur ${userId} à la formation ${formation.title} (ID: ${formationId}) mais plus de places disponibles.`);
      return res.status(400).json({ message: 'Plus de places disponibles pour cette formation.' });
    }

  } catch (error) {
    logger.error('Erreur inattendue lors de l\'enrôlement:', error.message);
    next(error);
  }
};

module.exports = {
  enrollUserToFormation
};
