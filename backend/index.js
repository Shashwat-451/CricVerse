import express from "express";
import router from "./routes/routes.js";  // Assuming it's an ES6 module
import { dbconnect } from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io"; // Use named import for socket.io


// Initialize express app
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

// Listen for client connections
io.on("connection", (socket) => {
	console.log(`New client connected: ${socket.id}`);
  
	// Handle message with user's name
	socket.on("sendMessage", ({ name, message }) => {
	  io.emit("receiveMessage", { name, message });
	});
  
	socket.on("disconnect", () => {
	  console.log("Client disconnected");
	});
  });

server.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});


