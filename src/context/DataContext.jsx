import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [carts, setCart] = useState([]);

  const [cartBtnInfo, setCartBtnInfo] = useState({});

  const toggleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
  };

  const addCart = (newCart) => {
    setCart([...carts, newCart]);
  };

  return (
    <DataContext.Provider
      value={{
        cartDrawer,
        toggleCartDrawer,
        carts,
        addCart,
        cartBtnInfo,
        setCartBtnInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
