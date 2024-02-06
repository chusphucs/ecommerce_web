"use cliet";

import { CartProductType } from "../product/[productId]/ProductDetail";

interface ItemContentProps {
  cartProduct: CartProductType;
}
export default function ItemContent({ cartProduct }: ItemContentProps) {
  return (
    <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-4 border border-slate-400 pt-2 px-2">
      <div className="col-span-2 justify-self-start">{cartProduct.name}</div>
      <div className="justify-self-center">{cartProduct.price}</div>
      <div className="justify-self-center">{cartProduct.quantity}</div>
      <div className="justify-self-end">{cartProduct.price}</div>{" "}
    </div>
  );
}
