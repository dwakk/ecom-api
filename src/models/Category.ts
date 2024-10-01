import { Model, DataTypes } from "sequelize";
import sequelize from '../config/connection';
import CategoryAttributes from "../typings/Category";

class Category extends Model<CategoryAttributes> implements CategoryAttributes {
    public id!: number;
    public slug!: string;
    public category_name!: string;
    public url!: string;
}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
});

export default Category;