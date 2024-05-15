import { Sequelize, Model, DataTypes } from 'sequelize';
import databaseConfig from '../config/database';

const sequelize = new Sequelize(databaseConfig);

class ActionModel extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public initialDate!: Date;
    public status!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

ActionModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    initialDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'ActionModel',
    tableName: 'ActionTable',
});

export default ActionModel;
