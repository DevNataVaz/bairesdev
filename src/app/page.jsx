//import { useRef } from "react";

import Image from "next/image";
import amstel from "../assets/amstel.jpg";
import cozumel from "../assets/cozumel.jpg";
import vinho from "../assets/vinho.jpg";

const happyHourItems = [
  {
    name: "VINHO BELLAVISTA",
    description: "Cabernet Sauvignon, Carménère, Rosé ou Chardonnay",
    price: "R$ 54,90",
    image: vinho,
  },
  {
    name: "AMSTEL",
    description: "Cabernet Sauvignon, Carménère, Rosé ou Chardonnay600ml",
    price: "R$ 9,90",
    image: amstel,
  },
  {
    name: "Cozumel",
    description: "Cabernet Sauvignon, Carménère, Rosé ou Chardonnay600ml",
    price: "R$ 9,90",
    image: cozumel,
  },
];

export default function Home() {
  //const happyRef = useRef();

  return (
    <div className="">
      <h2 className="font-bold">SEG / SAB 11H ÀS 20H | DOM 16H ÀS 22H</h2>
      <div>
        
        {happyHourItems.map((item, index) => (
          <div key={index} className="item flex justify-between shadow-sm shadow-gray-400 p-5 ">
            <div className="">
            <h4>{item.name}</h4>
            <p className="text-zinc-500">{item.description}</p>
            <p className="flex ">{item.price}</p>
            </div>
            <Image className="rounded-2xl relative block" src={item.image} alt={item.name} width={180} />
          </div>
        ))}
      </div>
    </div>
  );
}
