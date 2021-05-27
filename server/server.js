const express = require('express');
//import ApolloServer
const { ApolloServer } = require('apollo-server-express');

//import our typeDefs and reslolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
//create a new Apollo server and pass in our schema data
const server = new ApolloServer({
    typeDefs,
    resolvers
});

//intergrate our Apollo server with the Express applivation as middleware 
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT,()=> {
        console.log(`API server running on port ${PORT}!`);
        //log where we can go test our GQL API
    console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`)
    });
})

