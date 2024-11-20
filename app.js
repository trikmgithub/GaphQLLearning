const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs  = require('./schema/schema');
const resolvers = require('./resolver/resolver')
const startServer = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    // Bắt buộc phải `await server.start()` trước khi gọi `applyMiddleware`
    await server.start();

    server.applyMiddleware({ app });

    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startServer().catch(err => {
    console.error('Error starting server:', err);
});
