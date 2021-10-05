# Réseau social
![aperçu](https://media.giphy.com/media/KQwfFO47z5iGLA3L23/giphy.gif)

Cette application est un MVP sur le thème d'un réseau social, les fonctionnalités qui ont été implémentées sont :
- l'enregistrement d'un utilisateur
- la connexion de l'utilisateur avec maintien de session via un token stocké dans un cookie
- la consultation de la liste des posts et des commentaires sans authentification

##### ***Avec authentification :***

- la consultation de son profil utilisateur
- la possibilité de supprimer son compte utilisateur ( lors de la suppression tout les posts et commentaires relier à ce compte seront supprimé en cascade )
- la creation d'un post avec du text et/ou une image ( format : jpg, jpeg, png, gif, taille max : 2MB )
- la modification d'un post par son autheur
- la suppression d'un post par son autheur
- la possibilité de commenter un post
- la modification de son commentaire
- la suppression de son commentaire

##### ***Un mode admin*** ( A attribuer manuellement dans la database mySQL en mettant le isAdmin a 1 )
L'admin a le droit de :
- supprimer ou modifier un post
- supprimer ou modifier un commentaire
- a accés à un lien privé pour gérer les utilisateurs


## ***Stack technique***

#### ***Frontend*** : React - Redux - styled-components
  
#### ***Backend*** :  Nodejs - express - sequelize
  
#### ***Database*** : mySQL

# ***Installation***

- Cloner ce repository

## ***Installer les dépendances***
- Ouvrez le terminal sur le dossier server et tapez npm install
- Ouvrez le terminal sur le dossier client et tapez npm install

## ***Créer les fichiers .env***
- A la racine du dossier client créer un fichier .env.local et y mettre :
 ```REACT_APP_API_URL=http://localhost:5000```

- Dans server/config créer un fichier .env et y mettre :
 ```PORT=5000
    TOKEN_SECRET=monCodeSecret
    JWT_EXPIRES_IN=24h
    CLIENT_URL=http://localhost:3000
 ```

## ***Relier la database mySQL au serveur***
- Ouvrez le fichier config.json dans le dossier server/config à "development":
- Renseignez username et password ( vos identifiants database mySQL )
- Renseignez database ( Le nom que vous voulez )

## ***Créer et migrer la database sur mySQL***
- Ouvrez le terminal sur le dossier server
- Tapez la commande: ```sequelize db:create``` ( le schéma se crée dans la db mySQL avec le nom que vous aviez choisi )
- Tapez la commande: ```sequelize db:migrate``` ( les models migrent dans la db mySQL )

## ***Démarrer l'application***

### ***mise en service du serveur***
- Ouvrez un terminal sur le dossier server et tapez la commande ```npm start``` 
- Gardez le ouvert

### ***Mise en service de l'app client***
- Ouvrez un autre terminal sur le dossier client et tapez la commande ```npm start```
- Gardez le ouvert

### ***Ouvrer votre navigateur sur :***
```
http://localhost:3000
```

### Happy !!! Bonne utilisation :)
