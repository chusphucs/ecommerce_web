"use client";
import Link from "next/link";
import Container from "../Container";
import { useCart } from "@/hooks/useCart";
import CartCount from "./CartCount";
import Search from "./Search";

const NavBar = () => {
  const { cartTotalQty } = useCart();
  return (
    <div className="sticky top-0 z-30 bg-slate-200 w-full shadow-sm">
      <div className="py-4 md:py-3 border-b-[1px]">
        <Container>
          <div className="flex justify-between items-center gap-3 md:gap-0">
            <Link href="/">E-Shop</Link>
            <div className="hidden md:block">
              <Search />
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
