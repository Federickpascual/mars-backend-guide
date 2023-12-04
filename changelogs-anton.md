# Changelogs

## 10-23-23(error-handler) Anton

-   Refactor the codes, converted the codebase from `es5` to `es6`
-   Renamed the file names of `controllers`, `models`, and `routes`
-   Renamed the `controllers` and align to use the correct english verbs.
    For example from `createdEmployee` to `createEmployee`, `deleteEmp` to
    `deleteEmployee`, `getallTransaction` to `getAllTransactions`
-   Added more rules in `prettierrc.json`
-   Created a `markdownlint.json` file
-   Installed the `dotenv` and `nodemon` under dev dependencies only.
-   Explicitly added the dialect because of the error
    `Dialect needs to be explicitly supplied as of v4.0.0`
-   Installed `express-async-errors` to handle the async errors
-   Installed `morgan` for logging every request
-   Created `errorHandlerMiddleware`
-   Created custom error handlers. `BadRequestError`, `NotFoundError`,
    `UnauthenticatedError`, `UnauthorizedError`
-   Edited the controllers and rename the `define` name aligned to the Model name
-   Edited the database connection to run on es6
