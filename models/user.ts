"use strict";
import { Model, UUIDV4 } from 'sequelize';


interface UserAttributes{
  id:string;
  name:string;
  email:string;
 password:string;
//  last_login: Date;
}


module.exports = (sequelize: any, DataTypes :any) => {
  class User extends Model<UserAttributes>
  implements UserAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id !: string;
     name !: string;
     email !: string;
     password !: string;
    //  last_login!:Date;
    static associate(models :any) {
      // define association here
    }
  }
  User.init( {

    id:{
      type:DataTypes.UUID,
      defaultValue:UUIDV4,
      allowNull:false,
      primaryKey:true
    },

    name:{
      type: DataTypes.STRING,
      allowNull:false
    },

    email:{
      type: DataTypes.STRING,
       allowNull: false,
       unique: true
     },

     password:{
      type: DataTypes.STRING,
       allowNull: false
     },

    //  last_login:{
    //     type:DataTypes.Date
    //  }



    },{
      sequelize,
      modelName: "User",
    });
  return User;
};
