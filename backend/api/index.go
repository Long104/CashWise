package handler

import (
	"net/http"

	// "os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"

	// jwtware "github.com/gofiber/jwt/v3"

	"github.com/long104/SenZen/config"
	"github.com/long104/SenZen/middleware"
	"github.com/long104/SenZen/routes"
)

// Handler is the main entry point of the application.
func Handler(w http.ResponseWriter, r *http.Request) {
	// Set the proper request path in `*fiber.Ctx`
	r.RequestURI = r.URL.String()
	handler().ServeHTTP(w, r)
}
func handler() http.HandlerFunc {
	config.ConnectDatabase()
	app := fiber.New()

	app.Use(middleware.CORSMiddleware())

	app.Get("api/health", func(c *fiber.Ctx) error {
		return c.SendString("health check ok")
	})

	routes.SetupOAuthRoutes(app)
	routes.SetupAuthRoutes(app)

	// app.Use(jwtware.New(jwtware.Config{
	// 	SigningKey: []byte(os.Getenv("jwtSecretKey")),
	// }))

	// app.Use("/admin", middleware.checkMiddleware)
	// app.Use("/books", AuthRequired)
	app.Get("api/validate-token", middleware.ValidateToken)

	routes.SetupRoutes(app)

	// setupRoutes(app)

	// app.Listen(":8080")
	return adaptor.FiberApp(app)
}
