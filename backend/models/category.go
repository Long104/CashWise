package models

// "github.com/golang-jwt/jwt/v4"
// "golang.org/x/crypto/bcrypt"

// gorm.Model

type Category struct {
	ID           int64  `gorm:"primaryKey;autoIncrement" json:"id"`
	Name         string `gorm:"not null;unique" json:"name"`
	Description  string
	Budgets      []Budget      `gorm:"foreignKey:CategoryID"`
	Transactions []Transaction `gorm:"foreignKey:CategoryID"`
}
