"use client";

import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import BackDrop from "./BackDrop";
import { signOut } from "next-auth/react";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  console.log(isOpen);

  return (
    <>
      <div className="relative cursor-pointer z-30">
        <div
          onClick={toggleOpen}
          className="flex items-center gap-1 p-2 transition hover:shadow-md rounded-full text-slate-700 "
        >
          <Avatar />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div
            className="absolute
            rounded-md
            w-[180px]
            shadow-md
            bg-white
            overflow-hidden 
            flex 
            flex-col
            top-12
            right-0
            cursor-pointer"
          >
            <div>
              <Link href="orders">
                <MenuItem>Your Orders</MenuItem>
              </Link>{" "}
              <Link href="/admin">
                <MenuItem>Admin Dashboard</MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </MenuItem>
            </div>

            <div>
              <Link href="/login">
                <MenuItem>Login</MenuItem>
              </Link>{" "}
              <Link href="/register">
                <MenuItem>Register</MenuItem>
              </Link>
            </div>
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
}
