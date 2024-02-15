"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";

export default function CartCount() {
  const router = useRouter();
  const { cartTotalQty } = useCart();
  return (
    <div
      className="flex items-center relative cursor-pointer gap-1"
      onClick={() => router.push("/cart")}
    >
      <div>
        <FaCartShopping size={20} />
      </div>
      <div className="absolute top-[-8px] left-[12px] rounded-full bg-blue-500 text-white px-1 text-xs opacity-90">
        {cartTotalQty}
      </div>
    </div>
  );
}
