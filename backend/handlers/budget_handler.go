package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/long104/CashWise/models"
	"gorm.io/gorm"
)

func CreateBudget(c *fiber.Ctx) error {
	db := c.Locals("db").(*gorm.DB) // Assume DB instance passed via Fiber's context

	var budget models.Budget
	if err := c.BodyParser(&budget); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "cannot parse JSON"})
	}

	// Initialize remaining budget to the set amount
	budget.Remaining = budget.Amount

	// Save budget to the database
	if err := db.Create(&budget).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "could not create budget"})
	}

	return c.Status(fiber.StatusCreated).JSON(budget)
}

func DeductBudget(c *fiber.Ctx) error {
	db := c.Locals("db").(*gorm.DB)

	// Parse the transaction details from the request
	var transaction models.Transaction
	if err := c.BodyParser(&transaction); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "cannot parse JSON"})
	}

	// Begin a transaction in GORM
	tx := db.Begin()

	// Deduct transaction amount from budget's remaining
	if err := tx.Model(&models.Budget{}).
		Where("user_id = ?", transaction.UserID).
		Update("remaining", gorm.Expr("remaining - ?", transaction.Amount)).Error; err != nil {
		tx.Rollback()
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "could not update budget"})
	}

	// Save the transaction itself
	if err := tx.Create(&transaction).Error; err != nil {
		tx.Rollback()
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "could not log transaction"})
	}

	// Commit the transaction
	tx.Commit()

	return c.Status(fiber.StatusOK).JSON(fiber.Map{"message": "transaction logged and budget updated"})
}

func GetRemainingBudget(c *fiber.Ctx) error {
	db := c.Locals("db").(*gorm.DB)
	userID := c.Params("userId")

	var budget models.Budget
	if err := db.Where("user_id = ?", userID).First(&budget).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "budget not found"})
	}

	return c.JSON(fiber.Map{"remaining": budget.Remaining})
}
