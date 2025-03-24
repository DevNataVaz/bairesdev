import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const creditCard = <FontAwesomeIcon icon="fa-solid fa-credit-card" />

export default function Header() {
  return ( 
    
<div className=" m-5 ">
  <img src="/Vitorino.jpg" className="w-20 h-20 rounded-full"/>
  <ul className="flex gap-3  justify-end p-4 m-3 font-semibold ">
    <li><img src='/credit-card.svg' className="w-8 h-8 border-1 p-1.5 border-red-700 rounded-md"/></li>
    <li><img src='/store.svg' className="w-8 h-8 border-1 p-1.5 border-red-700 rounded-md"/></li>
    <li><img src='/share.svg' className="w-8 h-8 border-1 p-1.5 border-red-700 rounded-md stroke-red-600"/></li>
  </ul>
</div>

   );
}

