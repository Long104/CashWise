package handlers

import (
	// "fmt"
	// "log"

	"github.com/gofiber/fiber/v2"

	// "github.com/golang-jwt/jwt/v4"
	// "golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"github.com/long104/CashWise/models"
)

// gorm.Model

func CreateTransaction(db *gorm.DB, c *fiber.Ctx) error {
	transaction := new(models.Transaction)
	if err := c.BodyParser(transaction); err != nil {
		return err
	}
	// Check if the category exists
	var category models.Category
	if err := db.First(&category, transaction.CategoryID).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid category_id",
		})
	}

	// db.Create(&transaction)
	if err := db.Create(&transaction).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to create transaction",
		})
	}
	return c.JSON(transaction)
}

func GetTransactions(db *gorm.DB, c *fiber.Ctx) error {
	var transactions []models.Transaction
	db.Find(&transactions)
	return c.JSON(transactions)
}

func GetTransaction(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	var transaction models.Transaction
	db.First(&transaction, id)
	return c.JSON(transaction)
}

func UpdateTransaction(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	transaction := new(models.Transaction)
	db.First(&transaction, id)
	if err := c.BodyParser(transaction); err != nil {
		return err
	}
	db.Save(&transaction)
	return c.JSON(transaction)
}

// deleteTransaction deletes a transaction by id
func DeleteTransaction(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	db.Delete(&models.Transaction{}, id)
	return c.SendString("Transaction successfully deleted")
}
