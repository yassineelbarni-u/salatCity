# 🕌 SalatSync

Une application web moderne et élégante pour suivre les horaires de prière islamique en temps réel avec un compte à rebours dynamique jusqu'à la prochaine prière.

## ✨ Fonctionnalités

- ⏰ **Compte à rebours en temps réel** - Affichage dynamique du temps restant jusqu'à la prochaine prière
- 🌍 **Multi-villes** - Support de plusieurs villes marocaines (Casablanca, Rabat, Tanger, Marrakech, Fès, etc.)
- 🎨 **Design moderne** - Interface professionnelle avec gradient et effets glassmorphism
- 🖼️ **Images thématiques** - Chaque prière a une image unique représentant son moment de la journée
- 📡 **API temps réel** - Intégration avec l'API Aladhan pour des horaires précis
- 📱 **Responsive** - S'adapte à tous les écrans
- 🌙 **Mode sombre** - Design élégant avec thème sombre

## 🚀 Technologies Utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Build tool rapide et moderne
- **Material-UI** - Framework de composants React
- **Moment.js** - Manipulation des dates et heures
- **Axios** - Requêtes HTTP
- **Aladhan API** - Données des horaires de prière

## 📦 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/SalatSync.git
cd SalatSync/SalatTimings
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez l'application en mode développement :
```bash
npm run dev
```


## 🎯 Utilisation

1. L'application affiche automatiquement les horaires de prière pour Casablanca par défaut
2. Utilisez le sélecteur de ville en bas pour changer de localisation
3. Le compte à rebours se met à jour automatiquement chaque seconde
4. Les cartes de prière affichent les horaires spécifiques pour chaque salat

## 📁 Structure du Projet

```
SalatSync/
├── SalatTimings/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MainContent.jsx   
│   │   │   └── prayers.jsx       
│   │   ├── assets/
│   │   │   └── images/            
│   │   ├── App.jsx
│   │   ├── index.css            
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🎨 Aperçu des Fonctionnalités

### Compte à Rebours Intelligent
L'application calcule automatiquement quelle est la prochaine prière et affiche le temps restant au format HH:MM:SS. Le système gère intelligemment le passage de minuit (passage à Fajr du lendemain).

### Images Thématiques des Prières
- **Fajr** 🌅 - Aube avec ciel rose et orange
- **Dhuhr** ☀️ - Midi avec soleil éclatant
- **Asr** 🌄 - Après-midi doré
- **Maghrib** 🌆 - Coucher de soleil dramatique
- **Isha** 🌙 - Nuit étoilée avec croissant de lune

## 🌐 API

Ce projet utilise l'[API Aladhan](https://aladhan.com/prayer-times-api) pour obtenir les horaires de prière précis basés sur la localisation et la méthode de calcul.

Endpoint utilisé :
```
https://api.aladhan.com/v1/timingsByCity?city={ville}&country=Morocco&method=2
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📝 Licence

Ce projet est sous licence MIT.
