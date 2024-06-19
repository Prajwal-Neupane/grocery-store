import Product from "../models/Products.js";
import User from "../models/User.js";

export const addProduct = async (req, res) => {
  const { name, description, image } = req.body;
  const newProduct = await Product.create({
    name,
    description,
    image,
  });
  res.json(newProduct);
};

export const getAllProducts = async (req, res) => {
  const response = await Product.findAll();
  res.json(response);
};
