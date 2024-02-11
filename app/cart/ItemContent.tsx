"use cliet";

import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/[productId]/ProductDetail";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps {
  cartProduct: CartProductType;
}
export default function ItemContent({ cartProduct }: ItemContentProps) {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } = useCart();
  return (
    <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-4 border border-t-[1.5px] border-slate-200 py-4 px-2">
      <div className="col-span-2 justify-self-start flex gap-2">
        <Link href={`/product/${cartProduct.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={cartProduct.selectedImg.image}
              alt={cartProduct.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${cartProduct.id}`}>
            {truncateText(cartProduct.name)}
          </Link>
          <div>{cartProduct.selectedImg.color}</div>
          <div className="w-[70px]">
            <button
              className="text-slate-500 underline"
              onClick={() => {
                handleRemoveProductFromCart(cartProduct);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">
        {formatPrice(cartProduct.price)}
      </div>
      <div className="justify-self-center text-xs">
        <SetQuantity
          cartCounter={true}
          cartProduct={cartProduct}
          handleQtyIncrease={() => {
            handleCartQtyIncrease(cartProduct);
          }}
          handleQtyDecrease={() => {
            handleCartQtyDecrease(cartProduct);
          }}
        />
      </div>
      <div className="justify-self-end font-semibold">
        {formatPrice(cartProduct.price * cartProduct.quantity)}
      </div>
    </div>
  );
}
