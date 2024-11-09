package models

import (
	// "fmt"
	// "log"
	"time"

	"github.com/gofiber/fiber/v2"

	// "github.com/golang-jwt/jwt/v4"
	// "golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

// gorm.Model

type Transaction struct {
	ID              int64     `gorm:"primaryKey;autoIncrement" json:"id"`
	UserID          int64     `gorm:"not null" json:"user_id"`
	User            User      `gorm:"foreignKey:UserID" json:"user"`
	Amount          float64   `gorm:"not null" json:"amount"`
	TransactionDate time.Time `gorm:"not null" json:"transaction_date"`
	CategoryID      int64     `gorm:"not null" json:"category_id"`
	Category        Category  `gorm:"foreignKey:CategoryID" json:"category"`
	Description     string    `json:"description"`
}

func CreateTransaction(db *gorm.DB, c *fiber.Ctx) error {
	transaction := new(Transaction)
	if err := c.BodyParser(transaction); err != nil {
		return err
	}
	// Check if the category exists
	var category Category
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
	var transactions []Transaction
	db.Find(&transactions)
	return c.JSON(transactions)
}

func GetTransaction(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	var transaction Transaction
	db.First(&transaction, id)
	return c.JSON(transaction)
}

func UpdateTransaction(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	transaction := new(Transaction)
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
	db.Delete(&Transaction{}, id)
	return c.SendString("Transaction successfully deleted")
}
