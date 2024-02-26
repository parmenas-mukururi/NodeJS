export const schema = {
  productName: {
    notEmpty: {
      errorMessage: "Product name cannot be empty",
    },
    isString: {
      errorMessage: "Product name must be a string",
    },
  },
  productPrice: {
    notEmpty: {
      errorMessage: "Product price cannot be empty",
    },
  },
  productDescription: {
    notEmpty: {
      errorMessage: "Product description cannot be empty",
    },
    isString: {
      errorMessage: "Product description must be a string",
    },
  },
};
