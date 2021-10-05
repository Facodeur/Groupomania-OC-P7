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

# ***Installation de l'application***

Suivre le mode d' [INSTALLATION.md](https://github.com/Facodeur/Groupomania-OC-P7/blob/main/INSTALLATION.md)
