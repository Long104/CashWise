package models



import (
	// "fmt"
	// "log"
	// "time"
	//
	"github.com/gofiber/fiber/v2"
	// "github.com/golang-jwt/jwt/v4"
	// "golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

// gorm.Model

type Category struct {
	ID   int64  `gorm:"primaryKey;autoIncrement" json:"id"`
	Name string `gorm:"not null;unique" json:"name"`
}

func GetCategory(db *gorm.DB, c *fiber.Ctx) error {
  id := c.Params("id")
  var category Category
  db.First(&category, id)
  return c.JSON(category)
}


func GetCategories(db *gorm.DB, c *fiber.Ctx) error {
	var users []Category
	db.Find(&users)
	return c.JSON(users)
}

// createCategory creates a new category
func CreateCategory(db *gorm.DB, c *fiber.Ctx) error {
  category := new(Category)
  if err := c.BodyParser(category); err != nil {
    return err
  }
  db.Create(&category)
  return c.JSON(category)
}

// updateCategory updates a category by id
func UpdateCategory(db *gorm.DB, c *fiber.Ctx) error {
  id := c.Params("id")
  category := new(Category)
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
  db.Delete(&Category{}, id)
  return c.SendString("Category successfully deleted")
}
