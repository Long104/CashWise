package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	jwtware "github.com/gofiber/jwt/v3"
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
	app.Use(middleware.CORSMiddleware())

	routes.SetupOAuthRoutes(app)
	routes.SetupAuthRoutes(app)

	app.Use(jwtware.New(jwtware.Config{
		SigningKey: []byte(os.Getenv("jwtSecretKey")),
	}))

	// app.Use("/admin", middleware.checkMiddleware)
	// app.Use("/books", AuthRequired)
	app.Get("/validate-token", middleware.ValidateToken)

	routes.SetupUserRoutes(app)
	routes.SetupRoutes(app)

	// setupRoutes(app)

	app.Listen(":8080")
}
