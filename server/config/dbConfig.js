import { Sequelize } from "sequelize";

const sequelize = new Sequelize("grocery-store", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
