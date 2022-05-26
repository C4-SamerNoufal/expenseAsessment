'use strict';

import {
  Model
} from 'sequelize';

interface ProjectAssignmentAttributes {
  CategoryId: number;
  UserId: string;
  ExpenseId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class ProjectAssignment extends Model<ProjectAssignmentAttributes> 
    implements ProjectAssignmentAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    CategoryId!: number;
    UserId!: string;
    ExpenseId!: number;

    static associate(models: any) {
      // define association here
    }
  };
  ProjectAssignment.init({
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Projects',
        key: 'id'
      }
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    ExpenseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Expenses',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'ProjectAssignment',
  });
  return ProjectAssignment;
};