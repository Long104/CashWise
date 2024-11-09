package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/long104/CashWise/handlers"
)

func SetupUserRoutes(app *fiber.App) {
	app.Get("/users", handlers.GetUsers)

	app.Get("/user/:id", handlers.GetUser)
}
