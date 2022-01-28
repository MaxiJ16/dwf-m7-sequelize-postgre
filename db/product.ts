import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index";

export class Product extends Model {}

Product.init(
  {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  },
  { sequelize, modelName: "product" }
);
