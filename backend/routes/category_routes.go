package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/long104/CashWise/config"
	"github.com/long104/CashWise/handlers"
)

func SetupCategoryRoutes(app *fiber.App) {
	// category
	app.Get("/categories", func(c *fiber.Ctx) error {
		return handlers.GetCategories(config.DB, c)
	})
	// app.Get("/books/:id", func(c *fiber.Ctx) error {
	//   return getBook(db, c)
	// })
	app.Post("/category", func(c *fiber.Ctx) error {
		return handlers.CreateCategory(config.DB, c)
	})

	// transaction
	app.Post("/transaction", func(c *fiber.Ctx) error {
		return handlers.CreateTransaction(config.DB, c)
	})

	app.Get("/transactions", func(c *fiber.Ctx) error {
		return handlers.GetTransactions(config.DB, c)
	})

	app.Get("/transactions", func(c *fiber.Ctx) error {
		return handlers.GetTransactions(config.DB, c)
	})

	// budget

	app.Post("/budget", handlers.CreateBudget)              // To set the user's budget
	app.Put("/budget/deduct", handlers.DeductBudget)        // To deduct from the budget
	app.Get("/budget/:userId", handlers.GetRemainingBudget) // To get remaining budget
}
