const express = require("express");
const cors = require("cors");

const app = express();

require("./routes/db");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


// ROUTES
const postRoutes = require("./routes/post");
const getRouter = require("./routes/get");
const getAllProducts = require("./routes/getAllProducts");
const Login = require("./routes/adminLogin");
const getProductBasedOnId = require("./routes/getProductBasedOnId");
const getProductsBasedOnCategory = require("./routes/getProductsBasedOnCategory");
const deleteProducts = require("./routes/deleteProducts");

// USE ROUTES
app.use("/api", postRoutes);
app.use("/api", getRouter);
app.use("/api", getAllProducts);
app.use("/api", Login);
app.use("/api", getProductBasedOnId);
app.use("/api", getProductsBasedOnCategory);
app.use("/api", deleteProducts);

// Local port ke sath process.env.PORT lagana zaroori hai
const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});