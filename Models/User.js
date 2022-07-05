const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  //compare entered password to bcrypt pw
  checkPassword(userPass) {
    return bcrypt.compareSync(userPass, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      //email cannot be a duplicate
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      //confirm pw is 6 chars long
      validate: {
        len: [6],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        //hash encrypts pw by converting it to a unique string of chars unique to the entered text
        newUserData.password = await bcrypt.hash(
          //salting adds a random 10 characters to make stored pw more secure
          newUserData.password,
          10
        );
        //after conversion, hashed/salted pw is ready to store
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
