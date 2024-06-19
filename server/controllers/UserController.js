import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    // const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 12);

    // Create the new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Send response with the new user data
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (!existingUser) {
      return res.status(401).json({ message: "User doesn't exist" });
    }
    // console.log(existingUser.password);

    const isPasswordValid = await bcryptjs.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password" });
    } else {
      const token = jwt.sign(
        { userId: existingUser.id, email: existingUser.email },
        "MERN",
        { expiresIn: "10h" }
      );

      res.status(200).json({ token });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Failed to login",
      error: error.message,
    });
  }
};

export const hello = async (req, res) => {
  const { id } = req.user;
  console.log(id);
};
export const addToCart = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  if (!productId) {
    return res.status(400).json({ error: "Product ID is required" });
  }

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Initialize user.cart as an array if it's falsy or not an array
    if (!Array.isArray(user.cart)) {
      user.cart = [];
    }

    // Check if productId is already in cart to prevent duplicates (optional)
    if (user.cart.includes(productId)) {
      return res.status(400).json({ error: "Product already in cart" });
    }

    // Add productId to the cart array
    user.cart.push(productId);

    // Save the updated user
    await user.save();

    return res
      .status(200)
      .json({ message: "Product added to cart", cart: user.cart });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return res.status(500).json({ error: "Failed to add product to cart" });
  }
};
