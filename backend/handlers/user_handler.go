package handlers

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/long104/CashWise/config"
	"github.com/long104/CashWise/models"
)

// loginUser handles user login

func GetUsers(c *fiber.Ctx) error {
	var users []models.User
	config.DB.Find(&users)
	return c.JSON(users)
}

func GetUser(c *fiber.Ctx) error {
	id := c.Params("id")
	var user models.User
	// config.DB.First(&user, id)

	if err := config.DB.Model(&models.User{}).Preload("Plans.Transactions").First(&user, id).Error; err != nil {
		log.Println("Error get plan to database:", err) // Log database error
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Cannot create transaction"})
	}

	return c.JSON(user)
}

// createBook creates a new book

// updateBook updates a book by id
func UpdateUser(c *fiber.Ctx) error {
	id := c.Params("id")
	user := new(models.User)
	config.DB.First(&user, id)
	if err := c.BodyParser(user); err != nil {
		return err
	}
	config.DB.Save(&user)
	return c.JSON(user)
}

// deleteBook deletes a book by id
func DeleteUser(c *fiber.Ctx) error {
	id := c.Params("id")
	config.DB.Delete(&models.User{}, id)
	return c.SendString("Book successfully deleted")
}
