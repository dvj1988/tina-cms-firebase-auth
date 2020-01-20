const createAuthMiddleware = require("./createAuthMiddleware")

module.exports = config => ({
  developMiddleware: createAuthMiddleware(config),
})
