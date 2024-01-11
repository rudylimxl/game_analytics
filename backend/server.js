import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import playRouter from "./src/routes/playRoutes.js";

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/greet", function (req, res) {
  res.json({message: "Hello world!", test: "This is just a test"});
});

app.use("/plays", playRouter);

// app.use((err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   res.status(err.statusCode).json({
//     status: err.statusCode,
//     message: err.message,
//   });
// });

app.listen(8000, () => {
  console.log(`Server running on 8000`);
});
