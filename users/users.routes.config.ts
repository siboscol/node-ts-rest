import { CommonRoutesConfig } from '../common/common.routes.config'
import UsersControllers from './controllers/users.controllers'
import UsersMiddleware from './middleware/users.middleware'
import express from 'express'
import usersMiddleware from './middleware/users.middleware'
import usersControllers from './controllers/users.controllers'

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes')
  }

  configureRoutes(): express.Application {
    this.app
      .route('/users')
      .get(UsersControllers.listUsers)
      .post(
        UsersMiddleware.validateRequireUserBodyFields,
        UsersMiddleware.validateSameEmailDoesntExist,
        UsersControllers.createUser
      )

    this.app.param('userId', usersMiddleware.extractUserId)
    this.app
      .route('/users/:userId')
      .all(UsersMiddleware.validateUserExists)
      .get(UsersControllers.getUserById)
      .put(
        UsersMiddleware.validateRequireUserBodyFields,
        usersMiddleware.validateSameEmailBelongToSameUser,
        UsersControllers.put
      )
      .patch(usersMiddleware.validatePatchEmail, usersControllers.patch)
      .delete(usersControllers.removeUser)

    return this.app
  }
}
