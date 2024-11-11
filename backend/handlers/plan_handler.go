package handlers

import (
	"log"
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

func GetPlan(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	var plan models.Plan
	db.First(&plan, id)
	return c.JSON(plan)
}

func GetPlans(db *gorm.DB, c *fiber.Ctx) error {
	var plans []models.Plan
	// db.Find(&plans)
	err := db.Model(&models.Plan{}).Preload("Transactions.Category").Find(&plans).Error
	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, "Could not retrieve users")
	}
	return c.JSON(plans)
}

// createCategory creates a new category
func CreatePlan(db *gorm.DB, c *fiber.Ctx) error {
	plan := new(models.Plan)
	if err := c.BodyParser(&plan); err != nil {
		log.Println("Error parsing request body:", err) // Log parsing error
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request"})
	}

	if err := db.Create(plan).Error; err != nil {
		log.Println("Error saving plan to database:", err) // Log database error
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Could not save plan"})
	}

	// db.Create(plan)
	return c.JSON(plan)
}

// updateCategory updates a category by id
func UpdatePlan(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	plan := new(models.Plan)
	db.First(plan, id)

	if err := c.BodyParser(&plan); err != nil {
		log.Println("Error parsing request body:", err) // Log parsing error
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request"})
	}
	// db.Save(plan)

	if err := db.Save(plan).Error; err != nil {
		log.Println("Error saving plan to database:", err) // Log database error
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Could not save plan"})
	}
	return c.JSON(plan)
}

// deleteCategory deletes a category by id
func DeletePlan(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	db.Delete(&models.Category{}, id)
	return c.SendString("Category successfully deleted")
}
