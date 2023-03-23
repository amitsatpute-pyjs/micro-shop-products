export const apiDoc = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Micro shop products service",
  },
  paths: {
    "/addproduct": {
      post: {
        tags: ["Products"],
        description: "Create new product",
        parameters: [
          {
            name: "prodcut",
            in: "body",
            description: "Product that we want to create",
            schema: {
              $ref: "#/definitions/ProductBody",
            },
          },
        ],
        produces: ["application/json"],
        responses: {
          "200": {
            description: "New product is created",
            schema: {
              $ref: "#/definitions/AddProductResponse",
            },
          },
        },
      },
    },
    "/products": {
      get: {
        tags: ["Products"],
        summary: "Get all products ",
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Products",
            },
          },
        },
      },
    },
    "/product/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of product that we want to find",
          type: "string",
        },
      ],
      get: {
        summary: "Find product with give ID",
        tags: ["Products"],
        responses: {
          "200": {
            description: "Record found",
            schema: {
              $ref: "#/definitions/Product",
            },
          },
        },
      },
    },
    "/deleteproduct/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of product that we want to delete",
          type: "string",
        },
      ],
      delete: {
        summary: "Delete product with given ID",
        tags: ["Products"],
        responses: {
          "200": {
            description: "Product deleted",
            schema: {
              $ref: "#/definitions/deleteProduct",
            },
          },
        },
      },
    },
    "/updateproduct/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of product that we want to update",
          type: "string",
        },
      ],
      put: {
        summary: "Update product with give ID",
        tags: ["Products"],
        parameters: [
          {
            name: "product",
            in: "body",
            description: "Product with new values of properties",
            schema: {
              $ref: "#/definitions/ProductBody",
            },
          },
        ],
        responses: {
          "200": {
            description: "Record updated",
            schema: {
              $ref: "#/definitions/AddProductResponse",
            },
          },
        },
      },
    },
  },
  definitions: {
    Product: {
      properties: {
        id: {
          type: "string",
        },
        name: {
          type: "string",
        },
        categories: {
          type: "array",
          items: {
            type: "string",
          },
        },
        cost: {
          type: "number",
        },
        description: {
          type: "string",
        },
        picture: {
          type: "string",
        },
        createdAt: {
          type: "string",
          format: "date-time",
        },
        updatesdAt: {
          type: "string",
          format: "date-time",
        },
      },
    },
    ProductBody: {
      required: ["name", "cost", "categories"],
      properties: {
        name: {
          type: "string",
        },
        categories: {
          type: "array",
          items: {
            type: "string",
          },
        },
        cost: {
          type: "number",
        },
        description: {
          type: "string",
        },
        picture: {
          type: "string",
        },
      },
    },
    Products: {
      properties: {
        message: {
          type: "string",
        },
        data: {
          type: "array",
          items: {
            $ref: "#/definitions/Product",
          },
        },
      },
    },
    AddProductResponse: {
      properties: {
        message: {
          type: "string",
        },
        data: {
          type: "array",
          items: {
            type: "object",
          },
        },
      },
    },
    deleteProduct: {
      properties: {
        message: {
          type: "string",
        },
        data: {
          properties: {
            productId: {
              type: "string",
            },
          },
        },
      },
    },
  },
};
