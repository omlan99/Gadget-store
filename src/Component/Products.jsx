import { useEffect, useState } from "react";
import Product from "./Product";
import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
  const products = useLoaderData(); 
  const { category } = useParams(); 
  const [gadget, setGadget] = useState([]); 
  const [showAll, setShowAll] = useState(false); 

  
  useEffect(() => {
    if (category === "All Products" || !category) {
      setGadget(showAll ? products : products.slice(0,4)); 
      const filteredData = products.filter(
        (product) => product.category === category
      );
      setGadget(filteredData);
    }
  }, [category, products, showAll]);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-3">
        {gadget.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>


      {!showAll &&  (
        <div className="flex justify-center items-center ml-[-200px]">
          <button
            className="btn btn-warning mt-4 ml-6 text-center"
            onClick={() => setShowAll(true)}
          >
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
