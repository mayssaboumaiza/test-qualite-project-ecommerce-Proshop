# Projet Test & Qualité – Application Full Stack E-Commerce

## 1. Contexte académique
Ce projet a été réalisé dans le cadre de la matière **Test et Qualité Logicielle**.  
L’objectif principal est de mettre en pratique les concepts de **tests logiciels**, **assurance qualité**, **traçabilité**, et **automatisation des tests** sur une application **full stack**.

Le projet couvre l’ensemble du cycle de test :
- Planification
- Conception des cas de test
- Exécution des tests manuels et automatisés
- Suivi via outils professionnels
- Clôture et reporting

---

## 2. Description du projet
Il s’agit d’une application **E-commerce full stack** permettant :
- La gestion des utilisateurs (authentification, rôles)
- La gestion des produits
- La gestion des commandes
- Les opérations CRUD
- La sécurisation via JWT

Le projet sert de **support applicatif** pour l’implémentation des activités de test.

---

## 3. Architecture technique

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT Authentication**
- Architecture MVC

### Frontend
- **React**
- **Redux**
- **Bootstrap**

### Base de données
- **MongoDB** (locale ou via MongoDB Atlas)

---

## 4. Outils et technologies de test

### Tests manuels
- **Postman**
  - Tests des API REST
  - Vérification des réponses HTTP
  - Tests des scénarios fonctionnels

### Tests automatisés
- **Cypress**
  - Tests End-to-End (E2E)
  - Scénarios utilisateurs réels
  - Captures d’écran et rapports

- **Jest + React Testing Library**
  - Tests unitaires frontend
  - Tests des composants React

### Gestion de projet & tests
- **Jira**
- **Xray**
  - Gestion des exigences
  - Gestion des cas de test
  - Exécution des tests
  - Traçabilité

---

## 5. Types de tests réalisés

- Tests unitaires
- Tests d’intégration
- Tests End-to-End (E2E)
- Tests API
- Tests fonctionnels manuels
- Tests de régression

---

## 6. Documentation de test

Les documents suivants sont inclus dans le projet :

- 📄 **Plan de test**
- 📄 **Cas de test détaillés**
- 📊 **Matrice de traçabilité bidirectionnelle**
- 📄 **Rapport de clôture des tests**
- 📦 **Collection Postman**
- 📸 **Captures d’écran Cypress**
- 📄 **Exports Jira / Xray**

---

## 7. Structure du projet

.
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── tests/ # Tests unitaires backend
│ └── server.js
│
├── frontend/
│ ├── src/
│ ├── cypress/ # Tests E2E Cypress
│ ├── coverage/ # Rapports de couverture (local)
│ └── package.json
│
├── cypress/ # Tests E2E globaux
├── README.md
├── .gitignore
└── package.json

yaml
Copier le code

---

## 8. Installation et exécution

### Prérequis
- Node.js
- MongoDB
- Git

### Cloner le projet
```bash
git clone https://github.com/USERNAME/NOM_DU_DEPOT.git
cd NOM_DU_DEPOT
Backend
bash
Copier le code
cd backend
npm install
npm run dev
Frontend
bash
Copier le code
cd frontend
npm install
npm start
9. Exécution des tests
Tests unitaires (Jest)
bash
Copier le code
npm test
Tests E2E (Cypress)
bash
Copier le code
npx cypress open
ou

bash
Copier le code
npx cypress run



11. Objectifs pédagogiques atteints
Ce projet démontre la maîtrise de :

L’ingénierie des tests

L’automatisation des tests

Les outils professionnels de QA

La documentation de test

La traçabilité des exigences

Le travail sur une application full stack réelle

12. Auteur
Nom : Mayssa Boumaiza
Matière : Test et Qualité Logicielle
Année universitaire : 2025–2026