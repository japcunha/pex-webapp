// import { useEffect, useState } from "react";
// // import api from "..";
// import ProductCard from "../components/ProductCard";

export default function SectionMenu(){
  
    return (
      <div className="bg-black/70 p-10 m-18 mt-30 text-center text-white">
        <h1 className="caret-amber-50 text-3xl font-bold mask-b-from-green-200 m-12 ">Menu</h1>
  

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Bebidas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           
          
          </div>
        </section>
  
        <section className="mb-8">
            
          <h2 className="text-2xl font-semibold mb-4">Salgados</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          </div>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sobremesas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           
        
          </div>
        </section>
      </div>
    )
}