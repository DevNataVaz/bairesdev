"use client"
//import { useRouter } from "next/router";
import { useRef } from "react";
import React from 'react';
import Link from "next/link";



export default function ScrollBar() {

  const menuRef = useRef(null);
  //const router = useRouter();

  const menuItems = [
    {
      label: "Happy Hour",
      path: "/",
    },
    {
      label: "Menu Executivo",
      path: "/menu-executivo",
    },
    {
      label: "Cardápio Principal",
      path: "/cardapio-principal",
    },
    {
      label: "Drinks",
      path: "/drinks",
    },
    {
      label: "Sobremesas",
      path: "/sobremesas",
    },
  ];

  const scrollLeft = () => {
    if (menuRef.current) menuRef.current.scrollBy({ left: -200, behavior: "smooth" });
  }
  const scrollRight = () => {
    if (menuRef.current) menuRef.current.scrollBy({ left: 200, behavior: "smooth" });
  }

  return (
    <div className="relative w-full px-4 py-2">
      {/* <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full"
        onClick={scrollLeft}>◀</button> */}

      <div
        ref={menuRef}
        className="flex space-x-4 overflow-x-scroll scroll-smooth scrollbar-hide w-full"
      >
        <link href={menuItems.path}/>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.path)}
            className="whitespace-nowrap px-5 py-3 border-1 rounded-md font-bold  transition-all"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full"
        onClick={scrollRight}>▶</button> */}
    </div>

  );
}

