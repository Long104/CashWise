package models

import (
	// "fmt"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type User struct {
	ID   int64  `gorm:"primaryKey;autoIncrement" json:"id"`
	Name string `gorm:"not null" json:"name"`
	// Password  string    `gorm:"not null" json:"password"`
	Password  string    `json:"password"`
	Email     string    `gorm:"not null;unique" json:"email"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
}

func CreateUser(db *gorm.DB, c *fiber.Ctx) error {
	user := new(User)
	if err := c.BodyParser(user); err != nil {
		return err
	}

	res := db.Where("email = ?", user.Email).First(&user)

	if res.RowsAffected > 0 {
		return c.JSON(fiber.Map{"message": "user already exists"})
	}

	// Encrypt the password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	user.Password = string(hashedPassword)

	// Create user
	result := db.Create(user)

	if result.Error != nil {
		log.Fatalf("Error creating user: %v", result.Error)
	}
	return c.JSON(user)
}

// loginUser handles user login
func LoginUser(db *gorm.DB, c *fiber.Ctx, jwtSecretKey []byte) error {
	var input User
	var user User

	if err := c.BodyParser(&input); err != nil {
		return err
	}

	// Find user by email
	db.Where("email = ?", input.Email).First(&user)

	// Check password
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)); err != nil {
		return c.SendStatus(fiber.StatusUnauthorized)
	}

	// TODO: Add custom claims
	// registeredClaims := jwt.RegisteredClaims{
	// 	Issuer:    "YourIssuerName",                                   // Set your custom issuer here
	// 	ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 72)), // Expiration time
	// }

	// Create JWT token
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["user_id"] = user.ID
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()
	claims["role"] = "admin"
	claims["email"] = user.Email
	claims["name"] = user.Name
	// claims["role"] = "memeber"
	// claims["exp"] = registeredClaims.ExpiresAt.Unix()
	// claims["iss"] = registeredClaims.Issuer

	t, err := token.SignedString(jwtSecretKey)
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	// Set cookie
	c.Cookie(&fiber.Cookie{
		Name:    "jwt",
		Value:   t,
		Expires: time.Now().Add(time.Hour * 72),
		// HTTPOnly: true,
		HTTPOnly: false,
		// Secure:   false,
		SameSite: "Lax",
		// HTTPOnly: false,
	})

	// return c.JSON(fiber.Map{"message": "success"})
	return c.JSON(fiber.Map{"cookie": c.Cookies("jwt")})
}

func GetUsers(db *gorm.DB, c *fiber.Ctx) error {
	var users []User
	db.Find(&users)
	return c.JSON(users)
}

func GetUser(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	var user User
	db.First(&user, id)
	return c.JSON(user)
}

// createBook creates a new book

// updateBook updates a book by id
func UpdateUser(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	user := new(User)
	db.First(&user, id)
	if err := c.BodyParser(user); err != nil {
		return err
	}
	db.Save(&user)
	return c.JSON(user)
}

// deleteBook deletes a book by id
func DeleteUser(db *gorm.DB, c *fiber.Ctx) error {
	id := c.Params("id")
	db.Delete(&User{}, id)
	return c.SendString("Book successfully deleted")
}
