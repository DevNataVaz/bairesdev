
const menuExecutivoItems = [
  {
    name: "PARMEGIANA DE FILÉ MIGNON",
    description: "GUARNIÇÕES FIXAS: ARROZ E FRITAS.",
    price: "R$ 49,90",
  },
  {
    name: "COSTELINHA SUÍNA COM BARBECUE",
    description: "ESCOLHA 3 ACOMPANHAMENTOS",
    price: "R$ 45,90",
  },
  {
    name: "TILÁPIA GRELHADA",
    description: "ESCOLHA 3 ACOMPANHAMENTOS",
    price: "R$ 39,90",
  },
];

export default function MenuExecutivo() {
  return (
    <div>
      <h3>Menu Executivo</h3>
      {menuExecutivoItems.map((item, index) => (
        <div key={index} className="item">
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}