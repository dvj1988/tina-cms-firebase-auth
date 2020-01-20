const cookieParser = require("cookie-parser")

/* eslint-disable no-restricted-globals */

/**
 * @typedef {import('express').Application} Application
 */

module.exports = config => app => {
  console.log(config)

  app.use(cookieParser())

  // Implement login route
  app.get("/__login", (req, res, next) => {
    return res.send({ path: "login" })
  })

  app.use((req, res, next) => {
    console.log(req.url)
    // Implement auth middleware
    return res.redirect("/__login")
    next()
  })
}
