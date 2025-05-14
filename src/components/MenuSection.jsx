import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MenuSection({ title, items, onEdit, image }) {
  const [isOpen, setIsOpen] = useState(false);

  //subcategorias
  const groupedItems = items.reduce((acc, item) => {
    const sub = item.subcategoria || "Outros";
    if (!acc[sub]) acc[sub] = [];
    acc[sub].push(item);
    return acc;
  }, {});

  const imagensCategoria = {
    Bebidas:
      "https://images.pexels.com/photos/15221978/pexels-photo-15221978/free-photo-of-cafeina-cafe-cappuccino-vista-do-topo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    Salgados:
      "https://i.pinimg.com/736x/b7/f7/23/b7f723e637cb0b652fec4134a72ada0e.jpg",
    Sobremesas:
      "https://i.pinimg.com/736x/b5/83/b5/b583b5617a9273163acf032f590095a3.jpg",
  };

  return (
    <div className="border-b m-18 py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full  px-4 py-2 font-semibold hover:bg-amber-600 rounded-2xl overflow-hidden "
        style={{
          backgroundImage: `url(${imagensCategoria[title]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "150px",
          position: "relative",
        }}
      >
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/40 backdrop-blur-sm text-white font-bold text-4xl flex items-center justify-center text-center z-10">
          {title}
        </div>

        {isOpen ? (
          <ChevronUp size={24} className="text-white " />
        ) : (
          <ChevronDown size={24} className="text-white" />
        )}
      </button>

      {isOpen && (
        <div className="mt-2 px-8 space-y-6">
          {Object.entries(groupedItems).map(([subcategory, subItems]) => (
            <div key={subcategory} className="mb-6">
              {title === "Bebidas" && subcategory !== title && (
                <h3 className="font-medium text-md mb-3 text-amber-400">
                  {subcategory}
                </h3>
              )}
              <ul className="space-y-6">
                {subItems.map((item) => (
                  <li
                    key={item.id}
                    className="py-5 border-b p-7 last:border-none flex flex-col items-center text-center gap-2 hover:bg-black/40 cursor-pointer"
                    onClick={() => onEdit(item)}
                  >
                    <div className="flex justify-between gap-2 w-full">
                      <span className="font-medium w-1/3">{item.nome}</span>
                      <span className="text-right w-1/4 whitespace-nowrap">
                        R$ {item.preco.toFixed(2)}
                      </span>
                    </div>
                    <span className="block text-sm text-gray-400 break-words">
                      {item.descricao}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
