'use strict';
import {
  Model
} from 'sequelize';

interface ExpenseAttributes{
  id:number;
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
spending_date!: Date;
amount!: number;
    static associate(models:any) {
      // define association here
      Expense.belongsToMany(models.User,{
        through: 'ProjectAssignments'
      })
      Expense.belongsToMany(models.Category,{
        through: 'ProjectAssignments'
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