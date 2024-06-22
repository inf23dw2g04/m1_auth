const config = require("../config/env");

const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Oauth2 Tasks API",
    version: "1.0.0",
    description: "API de tarefas desenvolvida pelo Grupo04 de Desenvolvimento Web II",
    contact: { name: "inf-24-dw2-g04" },
  },
  servers: [{ url: "http://localhost:" + config.port }],
  paths: {
    
    "/Users": {
      get: {
        tags: ["UsersController"],
        summary: "Retrieve Users",
        operationId: "retrieveUsers",
        responses: {
          200: {
            description: "Array of Users model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Users",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "UsersController",
      },
      post: {
        tags: ["UsersController"],
        summary: "Create User",
        operationId: "createUsers",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Users",
              },
              examples: {
                UserExample01: {
                  $ref: "#/components/examples/UserExample01",
                },
                UserExample02: {
                  $ref: "#/components/examples/UserExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Users",
              },
              examples: {
                UserExample01: {
                  $ref: "#/components/examples/UserExample01",
                },
                UserExample02: {
                  $ref: "#/components/examples/UserExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a User model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Users",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Users",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "UsersController",
      },
    },
    "/Users/{UserID}": {
      get: {
        tags: ["UsersController"],
        summary: "Retrieve User",
        operationId: "retrieveUser",
        parameters: [
          {
            name: "UserID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve User UserID 1",
                value: 1,
              },
              two: {
                summary: "Retrieve User UserID 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Users",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Users",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "UserID not found",
          },
        },
        "x-swagger-router-controller": "UsersController",
      },
      put: {
        tags: ["UsersController"],
        summary: "Update User",
        operationId: "updateUsers",
        parameters: [
          {
            name: "UserID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update User UserID 1",
                value: 1,
              },
              two: {
                summary: "Update User UserID 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Users",
              },
              examples: {
                UserUpdate: {
                  $ref: "#/components/examples/UserInsert",
                },
                UserExample01: {
                  $ref: "#/components/examples/UserExample01",
                },
                UserExample02: {
                  $ref: "#/components/examples/UserExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "User PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "UserID not found",
          },
        },
        "x-swagger-router-controller": "UsersController",
      },
      delete: {
        tags: ["UsersController"],
        summary: "Delete User",
        operationId: "deleteUsers",
        parameters: [
          {
            name: "UserID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete User UserID 1",
                value: 1,
              },
              two: {
                summary: "Delete User UserID 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "UserID not found",
          },
        },
        "x-swagger-router-controller": "UsersController",
      },
    },
    "/TaskCategories": {
      get: {
        tags: ["TaskCategoriesController"],
        summary: "Retrieve TaskCategories",
        operationId: "retrieveTaskCategories",
        responses: {
          200: {
            description: "Array of TaskCategorie model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TaskCategorie",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200_1",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "TaskCategoriesController",
      },
      post: {
        tags: ["TaskCategoriesController"],
        summary: "Create TaskCategorie",
        operationId: "createTaskCategories",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskCategories",
              },
              examples: {
                TaskCategorieInsert: {
                  $ref: "#/components/examples/TaskCategoriesInsert",
                },
                TaskCategorieExample01: {
                  $ref: "#/components/examples/TaskCategoriesExample01",
                },
                TaskCategorieExample02: {
                  $ref: "#/components/examples/TaskCategoriesExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/TaskCategories",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a TaskCategorie model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TaskCategories",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/TaskCategories",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "TaskCategoriesController",
      },
    },
    "/TaskCategories/{CategoryID}": {
      get: {
        tags: ["TaskCategoriesController"],
        summary: "Retrieve TaskCategorie",
        operationId: "retrieveTaskCategory",
        parameters: [
          {
            name: "CategoryID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve TaskCategory CategoryID 1",
                value: 1,
              },
              two: {
                summary: "Retrieve TaskCategory CategoryID 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TaskCategories",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/TaskCategories",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "CategoryID not found",
          },
        },
        "x-swagger-router-controller": "TaskCategoriesController",
      },
      put: {
        tags: ["TaskCategoriesController"],
        summary: "Update TaskCategories",
        operationId: "updateTaskCategories",
        parameters: [
          {
            name: "CategoryID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update TaskCategories CategoryID 1",
                value: 1,
              },
              two: {
                summary: "Update TaskCategories CategoryID 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskCategories",
              },
              examples: {
                TaskCategorieUpdate: {
                  $ref: "#/components/examples/TaskCategoriesInsert",
                },
                TaskCategorieExample01: {
                  $ref: "#/components/examples/TaskCategoriesExample01",
                },
                TaskCategorieExample02: {
                  $ref: "#/components/examples/TaskCategoriesExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "TaskCategorie PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "CategoryID not found",
          },
        },
        "x-swagger-router-controller": "TaskCategoriesController",
      },
      delete: {
        tags: ["TaskCategoriesController"],
        summary: "Delete TaskCategorie",
        operationId: "deleteTaskCategories",
        parameters: [
          {
            name: "CategoryID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete TaskCategories CategoryID 1",
                value: 1,
              },
              two: {
                summary: "Delete TaskCategories CategoryID 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "CategoryID not found",
          },
        },
        "x-swagger-router-controller": "TaskCategoriesController",
      },
    },
    "/TaskStatus": {
      get: {
        tags: ["TaskStatusController"],
        summary: "Retrieve TaskStatuses",
        operationId: "retrieveTaskStatuses",
        responses: {
          200: {
            description: "Array of TaskStatuses model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TaskStatuses",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "TaskStatusController",
      },
      post: {
        tags: ["TaskStatusController"],
        summary: "Create TaskStatus",
        operationId: "createTaskStatus",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskStatus",
              },
              examples: {
                TaskStatusInsert: {
                  $ref: "#/components/examples/TaskStatusInsert",
                },
                TaskStatusExample01: {
                  $ref: "#/components/examples/TaskStatusExample01",
                },
                TaskStatusExample02: {
                  $ref: "#/components/examples/TaskStatusExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/TaskStatus",
              },
              examples: {
                TaskStatusInsert: {
                  $ref: "#/components/examples/TaskStatusInsert",
                },
                UserExample01: {
                  $ref: "#/components/examples/TaskStatusExample01",
                },
                UserExample02: {
                  $ref: "#/components/examples/TaskStatusExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a TaskStatus model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TaskStatus",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/TaskStatus",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "TaskStatusController",
      },
    },
    "/TaskStatus/{id}": {
      get: {
        tags: ["TaskStatusController"],
        summary: "Retrieve TaskStatus",
        operationId: "retrieveTaskStatus",
        parameters: [
          {
            name: "StatusID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve TaskStatus id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve TaskStatus id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TaskStatus",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/TaskStatus",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TaskStatusController",
      },
      put: {
        tags: ["TaskStatusController"],
        summary: "Update TaskStatus",
        operationId: "updateTaskStatus",
        parameters: [
          {
            name: "StatusID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update TaskStatus id 1",
                value: 1,
              },
              two: {
                summary: "Update TaskStatus id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskStatus",
              },
              examples: {
                TaskStatusUpdate: {
                  $ref: "#/components/examples/TaskStatusInsert",
                },
                TaskStatusExample01: {
                  $ref: "#/components/examples/TaskStatusExample01",
                },
                TaskStatusExample02: {
                  $ref: "#/components/examples/TaskStatusExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "TaskStatus PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TaskStatusController",
      },
      delete: {
        tags: ["TaskStatusController"],
        summary: "Delete TaskStatus",
        operationId: "deleteTaskStatus",
        parameters: [
          {
            name: "StatusID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete TaskStatus id 1",
                value: 1,
              },
              two: {
                summary: "Delete TaskStatus id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TaskStatusController",
      },
    },
    "/Tasks": {
      get: {
        tags: ["TasksController"],
        summary: "Retrieve Tasks",
        operationId: "retrieveTasks",
        responses: {
          200: {
            description: "Array of Tasks model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Tasks",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "TasksController",
      },
      post: {
        tags: ["TasksController"],
        summary: "Create Task",
        operationId: "createTasks",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Tasks",
              },
              examples: {
                TaskInsert: {
                  $ref: "#/components/examples/TasksInsert",
                },
                TaskExample01: {
                  $ref: "#/components/examples/TasksExample01",
                },
                TaskExample02: {
                  $ref: "#/components/examples/TasksExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Tasks",
              },
              examples: {
                TaskInsert: {
                  $ref: "#/components/examples/TasksInsert",
                },
                TaskExample01: {
                  $ref: "#/components/examples/TasksExample01",
                },
                TaskExample02: {
                  $ref: "#/components/examples/TasksExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Task model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Tasks",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Tasks",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "TasksController",
      },
    },
    "/Tasks/{id}": {
      get: {
        tags: ["TasksController"],
        summary: "Retrieve Task",
        operationId: "retrieveTask",
        parameters: [
          {
            name: "TaskID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Task id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Task id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Tasks",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Tasks",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TasksController",
      },
      put: {
        tags: ["TasksController"],
        summary: "Update Task",
        operationId: "updateTasks",
        parameters: [
          {
            name: "TaskID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Task id 1",
                value: 1,
              },
              two: {
                summary: "Update Task id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Tasks",
              },
              examples: {
                TaskUpdate: {
                  $ref: "#/components/examples/TasksInsert",
                },
                TaskExample01: {
                  $ref: "#/components/examples/TasksExample01",
                },
                TaskExample02: {
                  $ref: "#/components/examples/TasksExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Task PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TasksController",
      },
      delete: {
        tags: ["TasksController"],
        summary: "Delete Task",
        operationId: "deleteTasks",
        parameters: [
          {
            name: "TaskID",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Task id 1",
                value: 1,
              },
              two: {
                summary: "Delete Task id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "TasksController",
      },
    },
  },
  components: {
    schemas: {
      TaskCategories: {
        title: "TaskCategories",
        required: [
          "CategoryID",
        ],
        type: "object",
        properties: {
          CategoryID: {
            type: "integer",
            format: "int64",
          },
          CategoryName: {
            type: "string",
          },
        },
        additionalProperties: true,
        example: {
          CategoryID: 1,
          CategoryName: "trabalho",
        },
      },
      Users: {
        title: "Users",
        required: ["UserName"],
        type: "object",
        properties: {
          UserID: {
            type: "integer",
            format: "int64",
          },
          UserName: {
            type: "string",
          },
          Email: {
            type: "string",
          },
        },
        additionalProperties: false, 
        example: {
          UserID: 1,
          UserName: "John Doe",
          Email: "john.doe@example.com",
        },
      },
      TaskStatus: {
        title: "TaskStatus",
        required: ["StatusID"],
        type: "object",
        properties: {
          StatusID: {
            type: "integer",
            format: "int64",
          },
          StatusName: {
            type: "string",
          },
        },
        additionalProperties: false,
        example: {
          StatusID: 2,
          StatusName: "Concluida",
        },
      },
      Tasks: {
        title: "Tasks",
        required: ["TaskID", "Title"],
        type: "object",
        properties: {
          TaskID: {
            type: "integer",
            format: "int64",
          },
          Title: {
            type: "string",
          },
          Description: {
            type: "string",
          },
          DueDate: {
            type: "string",
          },
          StatusID: {
            type: "integer",
            format: "int64",
          },
          CategoryID: {
            type: "integer",
            format: "int64",
          },
          UserID: {
            type: "integer",
            format: "int64",
          },
        },
        additionalProperties: false,
        example: {
          TaskID: 1,
          Title: "Projeto XYZ",
          Description: "Descrição do projeto",
          DueDate: "2021-01-02",
          StatusID: 1,
          CategoryID: 1,
          UserID: 1
        },
      },
      inline_response_200: {
        type: "object",
        properties: {
          User: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Users",
            },
          },
        },
        xml: {
          name: "Users",
        },
      },
      inline_response_200_1: {
        type: "object",
        properties: {
          TaskCategorie: {
            type: "array",
            items: {
              $ref: "#/components/schemas/TaskCategories",
            },
          },
        },
        xml: {
          name: "TaskCategories",
        },
      },
    },
    examples: {
      TaskCategoriesExample01: {
        value: {
          CategoryID: 1,
          CategoryName: "Trabalho",
        },
      },
      TaskCategoriesExample02: {
        value: {
          CategoryID: 2,
          CategoryName: "Pessoal",
        },
      },
      TaskCategoriesInsert: {
        value: {
          CategoryName: "TaskCategories",
        },
      },
      UsersExample01: {
        value: {
          UserID: 1,
          UserName: "John Doe",
          Email: "john.doe@example.com",
        },
      },
      UsersExample02: {
        value: {
          UserID: 2,
          UserName: "Jane Smith",
          Email: "jane.smith@example.com",
        },
      },
      UsersInsert: {
        value: {
          UserName: "User",
          Email: "user@example.com",
        },
      },
      TaskStatusExample01: {
        value: {
          StatusID: 1,
          StatusName: "Concluida",
        },
      },
      TaskStatusExample02: {
        value: {
          StatusID: 2,
          StatusName: "Em andamento",
        },
      },
      TaskStatusInsert: {
        value: {
          StatusName: "TaskStatus",
        },
      },
      TasksExample01: {
        value: {
          TaskID: 1,
          Title: "Projeto XYZ",
          Description: "Descrição do projeto",
          DueDate: "2021-01-02",
          StatusID: 1,
          CategoryID: 1,
          UserID: 1
        },
      },
      TasksExample02: {
        value: {
          TaskID: 2,
          Title: "Projeto ABC",
          Description: "Descrição do projeto",
          DueDate: "2021-01-02",
          StatusID: 2,
          CategoryID: 2,
          UserID: 2
        },
      },
      TasksInsert: {
        value: {
          Title: "Projeto",
          Description: "Descrição do projeto",
          DueDate: "2021-01-01",
          StatusID: 1,
          CategoryID: 1,
          UserID: 1
        },
      },
    },
    securitySchemes: {
      OAuth2Security: {
        type: "oauth2",
        flows: {
          authorizationCode: {
            authorizationUrl: "https://github.com/login/oauth/authorize",
            tokenUrl: "https://github.com/login/oauth/access_token",
            scopes: [],
          },
        },
      },
    },
  },
  security: [{ OAuth2Security: [] }],
};

const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
