const express = require('express');
const schema = require('./schema/schema');
const {graphqlHTTP} = require('express-graphql');
const app = express();

app.use('/graphql',graphqlHTTP({
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});