"use client";
import React, { useEffect, useState } from "react";
import useAuthStore from "@/zustand/auth";

const Chat = () => {
	const token = useAuthStore((state) => state.jwt); const [message, setMessage] = useState<string>(""); // Input message
	const [chatMessages, setChatMessages] = useState<
		Array<{ user: string; message: string }>
	>([]); // Store message with user info
	const wsRef = React.useRef<WebSocket | null>(null);

	const createWebSocket = () => {
		const backendUrl = new URL(process.env.NEXT_PUBLIC_BACKEND || "");
		// const ws = new WebSocket(`ws://localhost:8080/ws/1?token=${token}`);
		const ws = new WebSocket(
			`${backendUrl.protocol === "http:" ? "ws" : "wss"}://${backendUrl.host}/ws/1?token=${token}`,
		);

		wsRef.current = ws;

		ws.onopen = () => {
			console.log("Connected to WebSocket");
			// Send a system message when connecting
			ws.send(JSON.stringify({ type: "system", message: "User connected" })); };

		ws.onmessage = (event) => {
			try {
				const parsedMessage = JSON.parse(event.data);
				if (parsedMessage.type === "chat") {
					// If the message is from someone else, we label it "Someone"
					const sender = parsedMessage.sender === token ? "You" : "Someone";
					setChatMessages((prevMessages) => [
						...prevMessages,
						{ user: sender, message: parsedMessage.message },
					]);
				}
				console.log(parsedMessage);
			} catch (e) {
				console.log("Error parsing WebSocket message:", e);
			}
		};

		ws.onerror = (error) => console.error("WebSocket error:", error);
		ws.onclose = (event) => {
			console.log("WebSocket connection closed", event);
			// Reconnect when WebSocket is closed unexpectedly
			if (event.code !== 1000) {
				// 1000 is normal closure
				setTimeout(() => createWebSocket(), 1000); // Reconnect after 1 second
			}
		};
	};

	useEffect(() => {
		if (!token) {
			console.log("Token is not available.");
			return;
		}
		createWebSocket();

		// Initialize WebSocket connection

		return () => {
			if (wsRef.current) {
				wsRef.current.close();
			}
		};
	}, [token]);

	const sendMessage = () => {
		if (wsRef.current && message.trim()) {
			// Send the message to the server without adding it locally
			wsRef.current.send(
				JSON.stringify({ type: "chat", message, sender: token }),
			);

			// Clear the input field
			setMessage("");
		}
	};

	return (
		<div className="flex flex-col items-center gap-4 p-4">
			<div className="w-full max-w-lg">
				<p className="font-mono text-xs text-primary mb-2 text-center">
					01 / LIVE LEDGER CHAT
				</p>
				<h1 className="font-serif text-3xl font-normal tracking-tight text-foreground text-center mb-6">
					WebSocket Chat
				</h1>
			</div>
			<div className="w-full max-w-lg border border-border bg-card rounded-lg shadow-[0_1px_3px_rgba(28,25,23,0.04),0_6px_16px_rgba(28,25,23,0.02)]">
				<div className="h-64 overflow-y-auto mb-4 bg-secondary/40 p-3 rounded m-3 divide-y divide-border">
					{chatMessages.map((msg, idx) => (
						<p key={idx} className="text-sm text-foreground py-2 font-sans">
							<strong className="text-primary">{msg.user}:</strong> {msg.message}
						</p>
					))}
				</div>
				<div className="flex items-center gap-2 p-3">
					<input
						className="flex-1 border border-border bg-background p-2 rounded-md text-foreground font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Type your message..."
					/>
					<button
						className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 font-sans"
						onClick={sendMessage}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
