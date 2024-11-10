// models/plan_model.go
package models

import (
	"time"
)

// Plan represents a user's financial plan.
type Plan struct {
	ID            int64     `gorm:"primaryKey;autoIncrement" json:"id"`
	UserID        int64     `gorm:"not null" json:"user_id"`
	User          User      `gorm:"foreignKey:UserID" json:"user"`
	Name          string    `gorm:"not null" json:"name"`
	Description   string    `json:"description"`
	PlanType      string    `gorm:"not null" json:"plan_type"`
	Visibility    string    `gorm:"not null" json:"visibility"`
	Duration      string    `json:"duration"`
	InitialBudget float64   `gorm:"not null" json:"initial_budget"`
	AutoSave      bool      `json:"auto_save"`
	CreatedAt     time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt     time.Time `gorm:"autoUpdateTime" json:"updated_at"`
	Budgets       []Budget  `gorm:"foreignKey:PlanID"`
}

// CreatePlan inserts a new plan into the database.
