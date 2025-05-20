import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MenuSection({ title, items }) {
  const [isOpen, setIsOpen] = useState(false)


  

  return (
    <div className="border-b m-18 py-2 ">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left px-4 py-2 font-semibold text-lg  hover:bg-amber-600 rounded"
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <ul className="mt-2 px-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="py-2 border-b last:border-none flex justify-between"
            > <div> 
                <span>{item.name}</span>
              <span className="block text-sm text-gray-400">{item.description}</span>
              </div>
              <span className="text-right">R$ {item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
