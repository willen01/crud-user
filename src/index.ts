import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import "dotenv/config";
import { router } from "./routes";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(router); //endpoints
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument)); //documentação com swagger

app.listen(PORT, () => {
  console.log(`Server road on port ${PORT}`);
});
