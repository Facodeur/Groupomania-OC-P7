# Projet CRUD réseau social

## Stack technique 

### Frontend :
  React - Redux - styled-components
  
### Backend :
  Nodejs - express - sequelize
  
### Database :
  mySQL

# Installation

- Cloner ce repository

## Installer les dépendances
- Ouvrez le terminal sur le dossier server et tapez npm install
- Ouvrez le terminal sur le dossier client et tapez npm install

## Créer les fichiers .env
- A la racine du dossier client créer un fichier .env.local et y mettre :
 ```REACT_APP_API_URL=http://localhost:5000```

- Dans server/config créer un fichier .env et y mettre :
 ```PORT=5000
    TOKEN_SECRET=monCodeSecret
    JWT_EXPIRES_IN=24h
    CLIENT_URL=http://localhost:3000
 ```

## Relier la database mySQL au serveur
- Ouvrez le fichier config.json dans le dossier server/config à "development":
- Renseignez username et password ( vos identifiants database mySQL )
- Renseignez database ( Le nom que vous voulez )

## Créer et migrer la database sur mySQL
- Ouvrez le terminal sur le dossier server
- Tapez la commande: ```sequelize db:create``` ( le schéma se crée dans la db mySQL avec le nom que vous aviez choisi )
- Tapez la commande: ```sequelize db:migrate``` ( les models migrent dans la db mySQL )

## Démarrer l'application

### mise en service du serveur
- Ouvrez un terminal sur le dossier server et tapez la commande ```npm start``` 
- Gardez le ouvert

### Mise en service de l'app client
- Ouvrez un autre terminal sur le dossier client et tapez la commande ```npm start```
- Gardez le ouvert

### Happy !!! Bonne utilisation :)

