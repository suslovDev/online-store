import { store } from "../../../store";
import { plusToCart } from "../../../store/cart-slice";

describe("RoductItem.tsx:", () => {
  it("Товар добавляется в корзину и total меняется", () => {
    store.dispatch(
      plusToCart({
        product: {
          url: "url",
          title: "Title",
          sizeType: "weight",
          size: 100,
          barcode: 12345678910,
          manufacturer: "Manufacturer",
          brand: "Brand",
          description: "Long description",
          price: 199,
        },
        quantity: 1,
      })
    );
    expect(store.getState().cart.total).toEqual(199);
  });
});
