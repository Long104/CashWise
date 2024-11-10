package models

import (
	"time"
)

type Budget struct {
	ID        int64     `gorm:"primaryKey;autoIncrement" json:"id"`
	UserID    int64     `gorm:"not null" json:"user_id"`
	User      User      `gorm:"foreignKey:UserID" json:"user"`
	Amount    float64   `gorm:"not null" json:"amount"`     // Total budget amount set by the user
	Remaining float64   `gorm:"not null" json:"remaining"`  // Remaining amount after expenses
	StartDate time.Time `gorm:"not null" json:"start_date"` // Optional: For tracking over a specific period
	EndDate   time.Time `gorm:"not null" json:"end_date"`   // Optional: For tracking over a specific period
	CreatedAt time.Time `gorm:"autoCreateTime" json:"created_at"`
}
