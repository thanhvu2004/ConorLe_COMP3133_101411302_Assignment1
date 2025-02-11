const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schemas/employeeSchema");

const app = express();

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://root:passW0rd@mycluster.i14yy.mongodb.net/comp3133_101411302_assigment1?retryWrites=true&w=majority&appName=MyCluster",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  });

// Middleware
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
