
<h1 align="center">Réseau social React.js</h1>
<p align="center">
  <img src="https://media2.giphy.com/media/hWWWIcF7W63kO44Ynn/giphy.gif"/>
</p>

Cette application permet de démarrer un projet sur le thème d'un réseau social, elle permet de consulter des articles existant sans authentification, pour participer au échange il faudra au préalable s'inscrire, l'inscription est rapide et sécurisé, par la suite vous authentifiez et vous pourrez poster des articles avec du texte et/ou une image, intéragir avec les autres en commentant les articles et aussi cliquer sur le petit ♥️ pour aimer un article, vous pourrez supprimer votre compte, cela entraînera la suppression de vos post, de vos commentaires ainsi que vos like et il ne restera aucune trace de vos informations dans la base de donnée, un rôle admin peut être attribué pour gérer les échanges utilisateurs et aussi gérer les comptes utilisateurs si il ne respecte pas la charte de conduite du site



## ***Stack technique***

#### ***Frontend*** : React - Redux - styled-components
  
#### ***Backend*** :  Nodejs - express - sequelize
  
#### ***Database*** : mySQL

## ***Fonctionnalités***

- l'enregistrement d'un utilisateur
- la connexion de l'utilisateur avec maintien de session via un token stocké dans un cookie
- la consultation de la liste des posts et des commentaires sans authentification

#### ***Avec authentification :***

- la consultation de son profil utilisateur
- la possibilité de supprimer son compte utilisateur ( lors de la suppression tout les posts et commentaires relier à ce compte seront supprimé en cascade )
- la creation d'un post avec du text et/ou une image ( format : jpg, jpeg, png, gif, taille max : 2MB )
- la modification d'un post par son autheur
- la suppression d'un post par son autheur
- la possibilité de commenter un post
- la modification de son commentaire
- la suppression de son commentaire

#### ***Un mode admin*** ( A attribuer manuellement dans la database mySQL en mettant le isAdmin a 1 )

L'admin a le droit de :
- supprimer ou modifier un post
- supprimer ou modifier un commentaire
- a accés à un lien privé pour gérer les utilisateurs

# ***Installation de l'application***

Suivre le mode d' [INSTALLATION.md](https://github.com/Facodeur/Groupomania-OC-P7/blob/main/INSTALLATION.md)
