import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";

const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cart: {
    type: DataTypes.JSON, // or DataTypes.ARRAY(DataTypes.INTEGER) if you prefer using ARRAY
    defaultValue: [],
  },
});

export default User;

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       require: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       match: [
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//         "Please enter a valid email",
//       ],
//     },

//     password: {
//       type: String,
//       required: true,
//       minlength: 6,
//     },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("users", userSchema);
// export default User;
