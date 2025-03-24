

export default function Header() {
  return ( 
<div className="border-amber-100 border-1 bg-amber-100">
  {/* <Image  /> */}
  <img src="/Vitorino.jpg" className="w-40 h-40 rounded-full"/>
  <ul className="flex gap-25  justify-end p-4 m-3 font-semibold ">
    <li>
      Inicio
    </li>
    <li>
      Sobre
    </li>
    <li>
      Login
    </li>
    <li>
      Cadastro
    </li>
  </ul>
</div>
   );
}

