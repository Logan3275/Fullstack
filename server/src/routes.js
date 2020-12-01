const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PostsController = require('./controllers/PostsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
  app.delete('/user/:userId',
    AuthenticationController.deleteUser)

  app.get('/posts',
    PostsController.index)
  app.get('/posts/:postId',
    PostsController.show)
  app.put('/posts/:postId',
    PostsController.put)
  app.post('/posts',
    PostsController.post)
}
