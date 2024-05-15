import { Sequelize, Model, DataTypes } from 'sequelize';
import databaseConfig from '../config/database';
import { ActionModel } from './index';

const sequelize = new Sequelize(databaseConfig);

class TaskModel extends Model {
    public id!: number;
    public name!: string;
    public status!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public actionId!: number;
    public readonly action?: ActionModel;
}

TaskModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'TaskModel',
    tableName: 'TaskTable',
});

TaskModel.belongsTo(ActionModel, { foreignKey: 'actionId' });
ActionModel.hasMany(TaskModel, { foreignKey: 'actionId' });

export default TaskModel;
