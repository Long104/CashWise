package models

import (
	// "fmt"
	// "log"
	"time"
)

// gorm.Model

type Transaction struct {
	ID              int64     `gorm:"primaryKey;autoIncrement" json:"id"`
	BudgetID        int64     `gorm:"not null" json:"budget_id"`
	CategoryID      int64     `gorm:"not null" json:"category_id"`
	Amount          float64   `gorm:"not null" json:"amount"`
	TransactionDate time.Time `gorm:"not null" json:"transaction_date"`
	Description     string    `json:"description"`
	Budget          Budget    `gorm:"foreignKey:BudgetID" json:"budget"`
	Category        Category  `gorm:"foreignKey:CategoryID" json:"category"`
}
