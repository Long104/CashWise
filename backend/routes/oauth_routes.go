// routes/oauth_routes.go
package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/long104/SenZen/config"
	"github.com/long104/SenZen/controllers" // Adjust import path as needed
)

func SetupOAuthRoutes(app *fiber.App) {
	config.GoogleConfig()
	config.GithubConfig()

	app.Get("api/google_login", controllers.GoogleLogin)
	app.Get("/google_callback", controllers.GoogleCallback)
	app.Get("api/github_login", controllers.GithubLogin)
	app.Get("/github_callback", controllers.GithubCallback)
}
