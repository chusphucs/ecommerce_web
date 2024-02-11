"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";

export default function CartClient() {
  const { cartProducts, handleClearCart, cartTotalPrice } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div>Your cart is empty</div>
        <div>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Start Shoping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Shoping Cart" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>{" "}
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((cartProduct) => {
            return (
              <ItemContent key={cartProduct.id} cartProduct={cartProduct} />
            );
          })}
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-4 ">
        <div className="max-w-[90px]">
          <Button
            label="Clear Cart"
            onClick={() => {
              handleClearCart();
            }}
            small
            outline
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-base font-semibold flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(cartTotalPrice)}</span>
          </div>
          <p className="text-slate-500 text-sm">
            Taxes and shipping calculate at checkout
          </p>
          <Button label="Check out" onClick={() => {}} />
          <Link
            href={"/"}
            className="flex items-center gap-2 text-sm text-slate-500"
          >
            <MdArrowBack />
            <span>Start Shoping</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
