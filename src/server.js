import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const loggerMiddleware = morgan("dev");

const home = (req, res) => {
  return res.send("I love middlewares");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(loggerMiddleware);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
