import { createApp } from './app/index';

const startServer = async () => {
  const app = await createApp();

  // Start the server
//   const PORT = process.env.PORT || 4000;
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
}

startServer();
