import express from "express";
import router from "./routes/routes.js";
import { dbconnect } from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import { createClient } from "redis";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

dotenv.config();
const PORT = process.env.PORT || 4000;

dbconnect();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/api/v1", router);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

export const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient
  .connect()
  .then(() => {
    console.log("Connected to Redis...");
  })
  .catch((err) => {
    console.error("Redis connection error:", err);
  });

let participants = [];

io.on("connection", (socket) => {
  console.log(`New client connected: ${socket.id}`);

  socket.on("userJoined", (name) => {
    const user = { id: socket.id, name };
    participants.push(user);
    io.emit("updateParticipants", participants); // Update all clients with the participant list
  });

  socket.on("sendMessage", ({ name, message }) => {
    io.emit("receiveMessage", { name, message });
  });

  socket.on("disconnect", () => {
    participants = participants.filter((user) => user.id !== socket.id);
    io.emit("updateParticipants", participants);
    console.log(`Client disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
