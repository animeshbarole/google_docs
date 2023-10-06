const io = require("socket.io")(httpServer, {
    cors: {
      origin: "https://example.com",
      methods: ["GET", "POST"]
    }
  });