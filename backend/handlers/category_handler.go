package handlers

import (
	// "fmt"
	// "log"
	// "time"
	//
	"github.com/gofiber/fiber/v2"
	// "github.com/golang-jwt/jwt/v4"
	// "golang.org/x/crypto/bcrypt"
	"github.com/long104/CashWise/models"
	"gorm.io/gorm"
)

// gorm.Model

func GetCategory(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	var category models.Category
	db.First(&category, id)
	return c.JSON(category)
}

func GetCategories(db *gorm.DB, c *fiber.Ctx) error {
	var users []models.Category
	db.Find(&users)
	return c.JSON(users)
}

// createCategory creates a new category
func CreateCategory(db *gorm.DB, c *fiber.Ctx) error {
	category := new(models.Category)
	if err := c.BodyParser(category); err != nil {
		return err
	}
	db.Create(&category)
	return c.JSON(category)
}

// updateCategory updates a category by id
func UpdateCategory(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	category := new(models.Category)
	db.First(&category, id)
	if err := c.BodyParser(category); err != nil {
		return err
	}
	db.Save(&category)
	return c.JSON(category)
}

// deleteCategory deletes a category by id
func DeleteCategory(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	db.Delete(&models.Category{}, id)
	return c.SendString("Category successfully deleted")
}
