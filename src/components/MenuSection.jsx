import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MenuSection({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="border-b m-20 py-2 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left px-4 py-2 font-semibold text-lg  hover:bg-amber-500 rounded"
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <ul className="mt-2 px-6">
          {items.map((item) => (
            <li key={item.id} className="py-2 border-b last:border-none flex justify-between">
              <span >{item.nome}</span>
              <span className="">
                R$ {item.preco.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
