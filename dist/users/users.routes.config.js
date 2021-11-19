"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controllers_1 = __importDefault(require("./controllers/users.controllers"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
const users_middleware_2 = __importDefault(require("./middleware/users.middleware"));
const users_controllers_2 = __importDefault(require("./controllers/users.controllers"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app
            .route('/users')
            .get(users_controllers_1.default.listUsers)
            .post(users_middleware_1.default.validateRequireUserBodyFields, users_middleware_1.default.validateSameEmailDoesntExist, users_controllers_1.default.createUser);
        this.app.param('userId', users_middleware_2.default.extractUserId);
        this.app
            .route('/users/:userId')
            .all(users_middleware_1.default.validateUserExists)
            .get(users_controllers_1.default.getUserById)
            .put(users_middleware_1.default.validateRequireUserBodyFields, users_middleware_2.default.validateSameEmailBelongToSameUser, users_controllers_1.default.put)
            .patch(users_middleware_2.default.validatePatchEmail, users_controllers_2.default.patch)
            .delete(users_controllers_2.default.removeUser);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW1FO0FBQ25FLHdGQUE4RDtBQUM5RCxxRkFBMkQ7QUFFM0QscUZBQTJEO0FBQzNELHdGQUE4RDtBQUU5RCxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDakQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ2YsR0FBRyxDQUFDLDJCQUFnQixDQUFDLFNBQVMsQ0FBQzthQUMvQixJQUFJLENBQ0gsMEJBQWUsQ0FBQyw2QkFBNkIsRUFDN0MsMEJBQWUsQ0FBQyw0QkFBNEIsRUFDNUMsMkJBQWdCLENBQUMsVUFBVSxDQUM1QixDQUFBO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDBCQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDdkIsR0FBRyxDQUFDLDBCQUFlLENBQUMsa0JBQWtCLENBQUM7YUFDdkMsR0FBRyxDQUFDLDJCQUFnQixDQUFDLFdBQVcsQ0FBQzthQUNqQyxHQUFHLENBQ0YsMEJBQWUsQ0FBQyw2QkFBNkIsRUFDN0MsMEJBQWUsQ0FBQyxpQ0FBaUMsRUFDakQsMkJBQWdCLENBQUMsR0FBRyxDQUNyQjthQUNBLEtBQUssQ0FBQywwQkFBZSxDQUFDLGtCQUFrQixFQUFFLDJCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRSxNQUFNLENBQUMsMkJBQWdCLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFdEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7Q0FDRjtBQTlCRCxrQ0E4QkMifQ==