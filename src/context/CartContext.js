import React, { useState } from "react";

import imgP1 from "../assets/image/logo-main-black.png";
import imgP2 from "../assets/image/logo-main-black.png";

const CartContext = React.createContext();

const defaultItems = [
  {
    id: "p1",
    title: "Amazon Echo Super Extra Bass Home System",
    img: imgP1,
    qty: 2,
    price: 70,
  },
  {
    id: "p2",
    title: "Apple AirPods with Wired Charging Case",
    img: imgP2,
    qty: 1,
    price: 150,
  },
];

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultItems);

  const incProdQty = (productId) => {
    const newProds = products.map((pr) => {
      if (pr.id === productId) {
        return { ...pr, qty: pr.qty + 1 };
      } else {
        return pr;
      }
    });

    setProducts([...newProds]);
  };

  const decProdQty = (productId) => {
    const newProds = products.map((pr) => {
      if (pr.id === productId && pr.qty > 0) {
        return { ...pr, qty: pr.qty - 1 };
      } else {
        return pr;
      }
    });

    setProducts([...newProds]);
  };

  const removeProduct = (productId) => {
    setProducts([...products.filter(({ id }) => id !== productId)]);
  };

  return (
    <CartContext.Provider
      value={{
        products,

        removeProduct,
        incProdQty,
        decProdQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
