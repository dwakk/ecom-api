import { Model, DataTypes, CreationOptional } from "sequelize";
import sequelize from "../config/connection";
import AccountAttributes from "../typings/Account";

class Account extends Model<AccountAttributes> implements AccountAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public role!: "admin" | "user";

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Account.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("admin", "user"),
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'account'
});

export default Account;