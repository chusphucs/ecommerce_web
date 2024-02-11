import { CartProductType } from "@/app/product/[productId]/ProductDetail";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";
type CartContextType = {
  cartTotalQty: number;
  cartTotalPrice: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);
interface Props {
  [propName: string]: any;
}
export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  console.log(cartTotalPrice);

  useEffect(() => {
    const cartItem: any = localStorage.getItem("eShopCartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItem);

    setCartProducts(cProducts);
  }, []);

  useEffect(() => {
    const getTotal = () => {
      if (cartProducts) {
        const { quantity, price } = cartProducts.reduce(
          (acc, item) => {
            return {
              quantity: acc.quantity + item.quantity,
              price: acc.price + item.price * item.quantity,
            };
          },
          { quantity: 0, price: 0 }
        );
        setCartTotalPrice(price);
        setCartTotalQty(quantity);
      }
    };
    getTotal();
  }, [cartProducts]);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      toast.success("Product added to cart");
      localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);
  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProduct = cartProducts.filter((item) => {
          return item.id !== product.id;
        });
        setCartProducts(filteredProduct);
        toast.success("Product Removed from cart");
        localStorage.setItem("eShopCartItems", JSON.stringify(filteredProduct));
      }
    },
    [cartProducts]
  );

  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;
      if (product.quantity === 99) {
        return toast.error("Maximum reached");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );
  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;
      if (product.quantity === 1) {
        return toast.error("Minimum reached");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const Index = cartProducts.findIndex((item) => item.id === product.id);
        if (Index > -1) {
          updatedCart[Index].quantity -= 1;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );
  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.setItem("eShopCartItems", JSON.stringify(null));
  }, [cartProducts]);

  const value = {
    cartTotalQty,
    cartTotalPrice,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
