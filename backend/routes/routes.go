package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/long104/CashWise/config"
	"github.com/long104/CashWise/handlers"
)

func SetupRoutes(app *fiber.App) {

  //transaction
	app.Post("/transaction", handlers.CreateTransaction)
	app.Delete("/transaction/:id", handlers.DeleteTransaction)
  // app.Post("/transaction/:id", handlers.CreateTransaction)


// category
	app.Get("/categories", handlers.GetCategories)
	app.Post("/category", handlers.CreateCategory)
	app.Delete("/category/:id", handlers.DeleteCategory)

// plan
  app.Get("/plan/:id", func(c *fiber.Ctx) error {
		return handlers.GetPlan(config.DB, c)
	})
	app.Get("/plans", func(c *fiber.Ctx) error {
		return handlers.GetPlans(config.DB, c)
	})
	app.Post("/plan", func(c *fiber.Ctx) error {
		return handlers.CreatePlan(config.DB, c)
	})
}
