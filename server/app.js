const mongoose = require('mongoose');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

mongoose.connect('mongodb+srv://dbuser:<db_password>@cluster0.mlkhau9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
});

mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});
