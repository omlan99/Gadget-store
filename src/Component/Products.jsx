import { useEffect, useState } from "react";
import Product from "./Product";
import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
  const products = useLoaderData(); // All products loaded from the loader
  const { category } = useParams(); // Get the category from URL params
  const [gadget, setGadget] = useState([]); // Products to display
  const [showAll, setShowAll] = useState(false); // Control whether to show all products

  // Filtering Logic
  useEffect(() => {
    if (category === "All Products" || !category) {
      setGadget(showAll ? products : products.slice(0,4)); // Show limited or all products
    } else {
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

      {/* Show All Button */}
      {!showAll &&  (
        <div className="flex justify-center items-center ml-[-200px]">
          <button
            className="btn btn-warning mt-4 ml-6 text-center"
            onClick={() => setShowAll(true)} // Update state to show all products
          >
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
