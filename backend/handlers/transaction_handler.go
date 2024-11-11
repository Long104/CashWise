package handlers

import (
	// "fmt"
	// "log"

	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/long104/CashWise/config"
	"github.com/long104/CashWise/models"
)

// gorm.Model

func CreateTransaction(c *fiber.Ctx) error {
	transaction := new(models.Transaction)
	if err := c.BodyParser(transaction); err != nil {
		log.Println("Error parsing request body:", err) // Log parsing error
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Cannot parse JSON"})
	}
	if err := config.DB.Create(&transaction).Error; err != nil {
		log.Println("Error saving plan to database:", err) // Log database error
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Cannot create transaction"})
	}
	return c.Status(fiber.StatusCreated).JSON(transaction)
}

func GetTransaction(c *fiber.Ctx) error {
	id := c.Params("id")
	var transaction models.Transaction
	if err := config.DB.First(&transaction, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Transaction not found"})
	}
	return c.JSON(transaction)
}

func UpdateTransaction(c *fiber.Ctx) error {
	id := c.Params("id")
	var transaction models.Transaction
	if err := config.DB.First(&transaction, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Transaction not found"})
	}
	if err := c.BodyParser(&transaction); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Cannot parse JSON"})
	}
	if err := config.DB.Save(&transaction).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Cannot update transaction"})
	}
	return c.JSON(transaction)
}

func DeleteTransaction(c *fiber.Ctx) error {
	id := c.Params("id")
	if err := config.DB.Delete(&models.Transaction{}, id).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Cannot delete transaction"})
	}
	return c.SendStatus(fiber.StatusNoContent)
}
