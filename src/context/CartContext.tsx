import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface CartCtx {
  count: number;
  add: () => void;
}

const Ctx = createContext<CartCtx>({ count: 0, add: () => {} });

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const add = useCallback(() => setCount((c) => c + 1), []);
  return <Ctx.Provider value={{ count, add }}>{children}</Ctx.Provider>;
};

export const useCart = () => useContext(Ctx);
