const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const expressPlayground = require("graphql-playground-middleware-express").default;

const db = require('./config/keys').mongoURI;
const app = express();

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('Connected to mongoDB successfully'))
    .catch(err => console.log(err));

const morgan = require("morgan");
app.use(morgan("dev"));

// app.use(
//     "/graphql"
// )

app.get("/playground", expressPlayground({ endpoint: "/graphql"}));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));