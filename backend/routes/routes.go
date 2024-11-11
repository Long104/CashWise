package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/long104/CashWise/config"
	"github.com/long104/CashWise/handlers"
)

func SetupRoutes(app *fiber.App) {
	// category

	app.Post("/transaction", handlers.CreateTransaction)
	app.Get("/categories", handlers.GetCategories)
	app.Post("/category", handlers.CreateCategory)

	app.Get("/plan", func(c *fiber.Ctx) error {
		return handlers.GetPlans(config.DB, c)
	})

	app.Post("/plan", func(c *fiber.Ctx) error {
		return handlers.CreatePlan(config.DB, c)
	})
}
