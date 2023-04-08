const state = {
  products: {
    products: [],
    originProducts: [
      {
        id: 1,
        barcode: 12345,
        brand: "Brand",
        description: "description",
        manufacturer: "Manufacturer",
        price: 199,
        size: 367,
        sizeType: "weight",
        title: "Title",
        url: "/url",
        care: [],
      },
    ],
    order: {
      type: "name",
      order: "increase",
    },
    filter: {
      priceRange: { from: 0, to: 10000 },
      substr: "",
      care: "",
      manufacturer: [],
    },
  },
  cart: {
    cart: [
      {
        id: 1,
        barcode: 12345678910,
        brand: "Brand",
        description: "description",
        manufacturer: "Manufacturer",
        price: 199,
        size: 250,
        sizeType: "weight",
        title: "Title",
        url: "./test-url",
        care: ["care1", "care2"],
      },
    ],
    total: 0,
  },
};

export const AppSelector = (f) => f(state);
