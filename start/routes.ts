import Route from '@ioc:Adonis/Core/Route'

Route.get('/register', 'AuthController.showRegister')
Route.post('/register', 'AuthController.register')
Route.get('/login', 'AuthController.showLogin')
Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout')

Route.get('/', 'CourseController.index').as('home')
Route.get('/courses/:course', 'CourseController.show')
Route.get('/watch/:course/:lesson', 'CourseController.watch').as('watch')
