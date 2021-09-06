const bcrypt = require("bcrypt");
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: "userId",
        onDelete: "CASCADE"
      })
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Veuiller rentrer un nom"
        },
        len: {
          args: [2, 20],
          msg: "Le nom doit contenir entre 2 et 20 charactères"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Veuillez entrer un email"
        },
        isEmail: {
          args: true,
          msg: "L'email n'est pas valide",
        },
        
      },
    },
    password: {
      type: DataTypes.STRING,
      set(value) {
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
          throw new Error('Minimum huit caractères, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial');
        } else {
          this.setDataValue('password', bcrypt.hashSync(value, 10));
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};