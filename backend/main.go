package main

import (
	"log"
	// "os"

	"github.com/gofiber/contrib/websocket"
	"github.com/gofiber/fiber/v2"
	// jwtware "github.com/gofiber/jwt/v3"
	"github.com/joho/godotenv"
	"github.com/long104/CashWise/config"
	"github.com/long104/CashWise/middleware"
	"github.com/long104/CashWise/routes"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Some error occurred. Err: %s", err)
	}
	config.ConnectDatabase()
	app := fiber.New()
	api := app.Group("/api")


	app.Use(middleware.CORSMiddleware())


	app.Get("/health", func(c *fiber.Ctx) error {
		return c.SendString("health check ok")
	})

	app.Use("/ws", func(c *fiber.Ctx) error {
		// IsWebSocketUpgrade returns true if the client
		// requested upgrade to the WebSocket protocol.
		if websocket.IsWebSocketUpgrade(c) {
			c.Locals("allowed", true)
			return c.Next()
		}
		return fiber.ErrUpgradeRequired
	})

	// routes.WsRoutes(app)
	routes.SetupOAuthRoutes(api)
	routes.SetupAuthRoutes(api)

	// app.Use(jwtware.New(jwtware.Config{
	// 	SigningKey: []byte(os.Getenv("jwtSecretKey")),
	// }))

	// app.Use("/admin", middleware.checkMiddleware)
	// app.Use("/books", AuthRequired)
	app.Get("/validate-token", middleware.ValidateToken)

	routes.SetupRoutes(api)

	// setupRoutes(app)

	app.Listen(":8080")
}
