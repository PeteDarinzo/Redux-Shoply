import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, cleanup, getByRole } from '@testing-library/react';
import ProductList from "./ProductList";
import rootReducer from "./reducers/rootReducer";

//https://medium.com/@lucksp_22012/dont-use-mock-store-use-your-real-store-b319d7e4e22e
let store;
beforeEach(() => {
  store = createStore(rootReducer);
})

afterEach(cleanup);

it("renders with Redux", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <ProductList />
      </MemoryRouter>
    </Provider>
  );
});

// it("renders with Redux and shows cart", () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <ProductList />
//     </Provider>
//   );
//   expect(getByText("Cart: 0")).toBeInTheDocument();
// });

// it("renders with Redux and updates cart", () => {
//   const { getByText, getByTestId } = render(
//     <Provider store={store}>
//       <ProductList />
//     </Provider>
//   );
//   const addBtn = getByTestId("add-tv");
//   fireEvent.click(addBtn);
//   expect(getByText("Cart: 1")).toBeInTheDocument();
//   const removeBtn = getByTestId("remove-tv");
//   fireEvent.click(removeBtn);
//   expect(getByText("Cart: 0")).toBeInTheDocument();
// });



// function renderWithRedux(
//   component,
//   { store = createStore(rootReducer) } = {}) {
//   return { ...render(<Provider store={store}>{component}</Provider>) }
// }


// it("renders with Redux", () => {
//   renderWithRedux(<ProductList />);
// });