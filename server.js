const http = require("http");

const PORT = 8000;

const serverListener = (req, res) => {
  console.log(`Server is up on port ${PORT}`);
};
const server = http.createServer(serverListener);

server.listen(PORT);
