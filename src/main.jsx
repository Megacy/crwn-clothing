import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { UserProvider } from "./contexts/user.context.jsx";
import { ProductsProvider } from "./contexts/products.context.jsx";
import { BrowserRouter } from "react-router-dom";
import { DropdownProvider } from "./contexts/cart.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <DropdownProvider>
            <App />
          </DropdownProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
