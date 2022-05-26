'use strict';
// import { sequelize } from ".";
import {
  Model
} from 'sequelize';

interface CategoryAttributes{
  id:number;
  user_id:string;
  name:string;
}

module.exports = (sequelize:any, DataTypes:any) => {
  class Category extends Model<CategoryAttributes>
  implements CategoryAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
id!:number;
user_id!: string;
name!: string;

    static associate(models:any) {
      // define association here
      Category.belongsTo(models.User,{
        foreignKey: 'user_id',
        as: 'user'
      })
      Category.hasMany(models.Expense, {
        foreignKey: 'category_id',
        as: 'expenses',
      });

    }
  }
  Category.init({
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
   
    },
  {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};