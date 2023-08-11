// import cors from 'cors';
// import express from 'express';
// import mongoose from 'mongoose';
// import { readdirSync } from 'fs';
// const morgan = require("morgan");
// require("dotenv").config();


// const app = express();
// mongoose
//     .connect(process.env.DATABASE).then(()=> console.log("DB Connected Successfully")).catch((err)=> console.log("DB Connection err =>", err));

// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));


// readdirSync("./routes").map((r)=>app.use("/",require(`./routes/${r}`)));

// const PORT=process.env.PORT || 8000;
// app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));


import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { readdirSync } from 'fs';
const morgan = require("morgan");
require("dotenv").config();

const app = express();
mongoose.connect(process.env.DATABASE)
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log("DB Connection err =>", err));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// // Include the auth and courses routes
// const routes = readdirSync("./routes");
// routes.map((r) => app.use("/", require(`./routes/${r}`)));

// const routes = readdirSync("./routes");
// routes.map((r) => app.use("/", require(`./routes/${r}`).default));

const routes = readdirSync('./routes');
routes.forEach((r) => {
  const routePath = `./routes/${r}`;
  const router = require(routePath).default;
  app.use('/', router);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
