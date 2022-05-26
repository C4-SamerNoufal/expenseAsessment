'use strict';
import {
  Model
} from 'sequelize';

interface ExpenseAttributes{
  id:number;
  user_id:string;
  category_id:number;
  spending_date:Date;
  amount:number
}
module.exports = (sequelize:any, DataTypes:any) => {
  class Expense extends Model<ExpenseAttributes> 
  implements ExpenseAttributes {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

id!:number;
user_id!:string;
category_id!:number;
spending_date!: Date;
amount!: number;


    static associate(models:any) {
      // define association here
      Expense.belongsTo(models.Category,{
        foreignKey: 'categoryId',
        // as: 'category'
      })
      Expense.belongsTo(models.User,{
        foreignKey: 'userId',
        // as: 'user'
      })
    
    }
  }
  Expense.init({

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
    category_id:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },

    spending_date:{
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
     },

    amount:{
      type:DataTypes.INTEGER,
      allowNull: false,
    }

  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};