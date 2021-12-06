const http = require("http");

const PORT = 8000;

// Create a server
const server = http.createServer((req, res) => {
  console.log(`Server is up on port ${PORT}`);
});

// Create a server
// const serverListener = (req, res) => {
//   console.log(`Server is up on port ${PORT}`);
// };
// const server = http.createServer(serverListener);

// Create a server with requestListener
// const server = http.createServer();
// server.on("request", (req, res) => {
//   console.log(`Server is up on port ${PORT}`);
// });

server.listen(PORT);
